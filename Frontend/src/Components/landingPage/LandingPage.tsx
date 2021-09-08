import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const LandingPage = () => {
  return (
    <div className="text-white pl-8 h-screen w-screen bg-no-repeat bg-landing-page-background bg-left-transtion transform bg-cover max-w-xl mx-auto ">
      <div className="flex flex-col justify-center items-start h-full gap-4 font-bold transform -translate-y-8">
        <p className="px-6 py-3 text-xl bg-grey-light rounded-xl  mt-28">Stragan.com</p>
        <div className="text-3xl flex flex-col justify-center font-extrabold">
          Next level of
          <div className="flex gap-2">
            gaming
            <div className="flex flex-col relative w-auto">
              <div
                className="absolute bg-blue-after h-4 my-5 w-full top-1"
                style={{ zIndex: -10 }}
              ></div>
              shopping
            </div>
          </div>
        </div>
        <Link
          to="/"
          className="bg-grey-verylight font-bold absolute bottom-3 right-8 text-base text-blue-after py-2 rounded-xl px-5 aboslute justify-center flex gap-2 items-center hover:bg-gray-700 "
        >
          Get started
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
    </div>
  )
}
