import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const card = (props) => {
  const about = props.about
  const aboutLink = about.includes('http')

  let aboutLinkMain;
  let aboutWithoutLink;
  // if aboutLink is true, then make it clickable
  if (aboutLink) {
    const aboutArray = about.split(' ')
    aboutLinkMain = aboutArray.find(element => element.includes('http'))
    const aboutLinkIndex = aboutArray.indexOf(aboutLinkMain)
    aboutArray.splice(aboutLinkIndex, 1)
    aboutWithoutLink = aboutArray.join(' ')
  }
  return (
    <>
      {/* design a card using tailwind css good ui */}
      <div className=" w-full h-auto overflow-hidden border border-gray-700 hover:border-gray-600 hover:scale-[1.006] rounded-xl">
        <div className="bg-[#080808] rounded-lg shadow-lg">

          <div className='flex flex-col'>

            <div className='h-20 md:h-24' style={{ backgroundColor: props.bannerColor }}></div>

            <div className='flex space-x-2'>
              <Image src={"https://avatars.githubusercontent.com/" + props.github} alt={props.name} width={95} height={95} className="rounded-full ml-2 md:ml-4 -mt-8 border-4 border-black" />
              <div className='flex items-baseline gap-1'>
                <p className='mt-2 font-bold text-lg md:text-xl'>{props.name}</p>
                <Link href={"https://twitter.com/" + props.username} target="_blank" rel="noopener noreferrer" className='mt-2 font-mono italic text-gray-300 text-sm hover:text-blue-400 cursor-pointer'>@{props.username}</Link>
              </div>
            </div>

            {aboutLink ? (
              <p className='mx-4 md:mx-5 text-base overflow-hidden text-ellipsis min-h-[48px] line-clamp-none md:line-clamp-2'>{aboutWithoutLink} <Link href={aboutLinkMain} target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-500 cursor-pointer'>{aboutLinkMain}</Link></p>
            ) : (
              <div className='mx-4 md:mx-5 text-base overflow-hidden min-h-[48px] text-ellipsis line-clamp-none md:line-clamp-2'>{props.about}</div>
            )}

            {/* Follow on github and on twitter button 2 in column */}
            <div className='flex flex-col gap-2 text-center md:flex-row justify-between mt-2 mb-4 mx-4 md:mx-5'>
              <Link href={"https://github.com/" + props.github} target="_blank" rel="noopener noreferrer" className='px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:ring'>Follow on GitHub <i className='bi bi-github'></i></Link>
              <Link href={"https://x.com/" + props.username} target="_blank" rel="noopener noreferrer" className='px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:ring'>Follow on 𝕏</Link>
            </div>

          </div>

        </div>
      </div>


    </>
  )
}

export default card
