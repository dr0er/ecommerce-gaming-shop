import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const LandingPage = () => {
  return (
    <div className="text-white pl-8 h-screen w-screen bg-no-repeat bg-landing-page-background bg-center bg-cover flex flex-col justify-center items-start filter saturate-.9">
      <p className="px-8 py-2 text-lg bg-black rounded-xl my-5">Stragan.com</p>
      <div className="text-3xl font-semibold flex flex-col justify-center">
        Next level of
        <div className="flex gap-2">
          gaming
          <span className="flex flex-col place-content-end bg-blue-400 h-4 my-5 w-1/2">
            shopping
          </span>
        </div>
      </div>

      <Link
        to="/"
        className="bg-gray-300 font-bold text-blue-400 py-2 rounded-xl my-4 w-32 justify-center hover:bg-gray-700 absolute bottom-10 right-10 flex gap-2 items-center">
        Get started
        <FontAwesomeIcon icon={faChevronRight} />
      </Link>
    </div>
  )
}
