import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import Link from 'next/link'
import useSWR from 'swr'
import Card from '../components/Card'

const Home = () => {
  const [search, setSearch] = useState(false)
  const [showControDiv, setShowControDiv] = useState(true)
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error } = useSWR('/api/users', fetcher)

  const dismiss = () => {
    setShowControDiv(false)
  }

  if (error) return <>
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}>

      <header className="">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block " href="/">
                <span className="sr-only">Home</span>
                <Image src="/x_large.png" alt="Logo" width={40} height={40} priority />
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-gray-700 px-5 py-2.5 text-sm font-medium hover:bg-gray-600 text-white shadow"
                  href="https://github.com/hellofaizan/xprofile" target="_blank" rel="noopener noreferrer" title='Add your 𝕏 (Twitter) Profile to this list :)'
                >
                  Contribute ⭐
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="grid h-screen px-4 place-content-center">
        <div className="text-center">
          <h1 className="font-black text-gray-200 text-9xl">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-400">Error loading data to screen.</p>

          <Link
            href="https://github.com/hellofaizan/xprofile"
            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Report Error
          </Link>
        </div>
      </div>

    </motion.div>
  </>

  if (data) {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}>

          <header className="">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="md:flex md:items-center md:gap-12">
                  <Link className="block " href="/">
                    <span className="sr-only">Home</span>
                    <Image src="/x_large.png" alt="Logo" width={40} height={40} priority />
                  </Link>
                </div>

                <div className="hidden sm:block">
                  <form className="flex items-center w-80">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                      <input type="text" onChange={(e) => setSearch(e.target.value)} id="simple-search" className="border border-gray text-sm rounded-lg block w-full pl-3 p-2.5  bg-[#0e0e0e] border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search user profile..." required></input>
                    </div>
                  </form>
                </div>

                <div className="flex items-center gap-4">
                  <div className="sm:flex items-center hidden sm:gap-4">

                    <Link href={"https://twitter.com/hellofaizaan"} target="_blank" rel="noopener noreferrer" ><i className="bi bi-twitter text-2xl hover:text-blue-500"></i></Link>
                    <Link href={"https://github.com/hellofaizan"} target="_blank" rel="noopener noreferrer" ><i className="bi bi-github text-2xl"></i></Link>
                    <Link
                      className="rounded-md bg-[#0e0e0e] border border-gray-600 px-5 py-2.5 text-sm font-medium hover:bg-gray-600 text-white shadow"
                      href="https://github.com/hellofaizan/xprofile" target="_blank" rel="noopener noreferrer" title='Add your 𝕏 (Twitter) Profile to this list :)'
                    >
                      Contribute ⭐
                    </Link>
                  </div>
                  <div className="block sm:hidden">
                    <form className="items-center flex">
                      <label htmlFor="simple-search" className="sr-only">Search</label>
                      <div className="relative w-full">
                        <input type="text" onChange={(e) => setSearch(e.target.value)} id="simple-search" className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5  bg-[#0e0e0e] border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search user profile..." required></input>
                      </div>
                      <Link href={"https://github.com/hellofaizan/xprofile"} className="p-2.5 ml-2 text-sm font-medium text-white bg-[#0e0e0e] rounded-lg focus:ring-2 focus:outline-none hover:bg-gray-900 focus:ring-gray-700 border border-gray-600">
                        ⭐
                        <span className="sr-only">Contribute</span>
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {data.length > 0 ? (
            <div className='flex flex-col mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
              <div className="grid grid-cols-1 gap-4 py-4 ">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {data
                    .filter((user) => {
                      if (search == "") {
                        return user
                      } else if (user.name.toLowerCase().includes(search.toLowerCase())) {
                        return user
                      }
                    })
                    // sort random
                    .sort(() => Math.random() - 0.5)
                    .map((user, index) => (
                      <Card key={index} user={user} bannerColor={user.banner_color} name={user.name} username={user.username} github={user.github} about={user.about} />
                    ))}

                </div>
              </div>

              {/* Reached end of the list show a text*/}
              <div className="col-span-1 mb-5">
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-400">End of list :) <Link href={"https://github.com/hellofaizan/xprofile"} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 cursor-pointer italic">Add Yours</Link></p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid h-screen px-4 place-content-center">
              <div className="text-center">
                <h1 className="font-black text-gray-200 text-3xl">No profiles available 😣</h1>
                <Link
                  href="https://github.com/hellofaizan/xprofile"
                  className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
                >
                  Submit your profile
                </Link>
              </div>
            </div>
          )}

          {
            showControDiv ? (
              <div className='banner hidden md:block fixed inset-x-0 bottom-0'>
                <div className="flex items-center justify-between gap-4 bg-white/5 px-4 py-3 text-white" >
                  <p className="text-sm font-medium">
                    Developed with <i className="bi bi-heart-fill text-red-500"></i> by <Link href="https://hellofaizan.me" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 cursor-pointer">@hellofaizan</Link> ( Open Source )
                  </p>

                  <button aria-label="Dismiss" onClick={dismiss} className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ) : ""
          }

        </motion.div>
      </>
    )
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}>

        {/* Loading */}
        <div className="grid h-screen px-4 place-content-center">
          <Image src="/x_large.png" alt="Logo" width={40} height={40} priority />
        </div>

      </motion.div>
    </>
  )
}


export default Home