import React from 'react'
import Image from 'next/image'

const card = (props) => {
  console.log(props.bannerColor)
  return (
    <>
      {/* design a card using tailwind css good ui */}
      <div className="w-full p-2">
        <div className="bg-[#080808] rounded-lg shadow-lg">
          <div className="p-4">
            <h2 className="text-2xl font-bold">{props.name}</h2>
            <p className="text-sm text-gray-500">
              {props.about}
            </p>
          </div>
          <div className="relative">
            <Image
              src={"https://avatars.githubusercontent.com/"+props.github}
              alt={props.name}
              width={100}
              height={100}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 right-0 p-4">
              <a

                href={props.github}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Follow on Github
              </a>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default card
