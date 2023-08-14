import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import Link from 'next/link'
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../components/Card'

const Home = () => {
  const [search, setSearch] = useState(false)
  const [data, setData] = useState()
  const [count, setCount] = useState(9)
  const [allCount, setAllCount] = useState(0)

  useEffect(() => {
    fetch12Users()
  }, []);

  const fetch12Users = async () => {
    try {
      const response = await fetch(`/api/users?count=${count}`);
      const apiData = await response.json();
      setAllCount(apiData.length)
      setData(apiData);
    } catch (error) {
      console.error("Error fetching random user subset:", error);
    }
  };

  const fetchMoreData = async () => {
    try {
      const response2 = await fetch(`/api/users?count=${count + 3}`);
      setCount(count + 3)
      const apiData2 = await response2.json();
      setData(apiData2);
    } catch (error) {
      console.error("Error fetching random user subset:", error);
    }
  }

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
                  <div className="block">
                    <span className="sr-only">Home</span>
                    <Image src="/x_large.png" alt="Logo" width={40} height={40} priority />
                  </div>
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

                    <Link href={"https://x.com/hellofaizaan"} target="_blank" rel="noopener noreferrer" className='rounded-md bg-[#0e0e0e] border border-gray-600 px-3 py-1.5 text-xl font-medium hover:bg-gray-600 text-white shadow'>𝕏</Link>
                    <Link href={"https://github.com/hellofaizan"} target="_blank" rel="noopener noreferrer" className='rounded-md bg-[#0e0e0e] border border-gray-600 px-2.5 py-1.5 text-xl font-medium hover:bg-gray-600 text-white shadow'><i className="bi bi-github"></i></Link>
                    <Link href={"https://discord.com/invite/vUHMxPvege"} target="_blank" rel="noopener noreferrer" className='rounded-md bg-[#0e0e0e] border border-gray-600 px-2.5 py-1.5 text-xl font-medium hover:bg-gray-600 text-white shadow'><i className="bi bi-discord"></i></Link>
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

          <div>
            <div className='flex flex-col mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pb-4'>

              <InfiniteScroll
                dataLength={data.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={allCount === data.length}
                loader={
                  <div style={{ textAlign: 'center' }}
                    className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
                    <span
                      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                      Loading...
                    </span>
                  </div>}
                endMessage={
                  <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }>

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
                      // .sort(() => Math.random() - 0.5)
                      .map((user, index) => (
                        <Card key={index} user={user} bannerColor={user.banner_color} name={user.name} username={user.username} github={user.github} about={user.about} />
                      ))}

                  </div>
                </div>
              </InfiniteScroll>
            </div>
          </div>

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
