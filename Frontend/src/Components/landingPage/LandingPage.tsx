import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface IProps {}

export const LandingPage: React.FC<IProps> = (props) => {
  return (
    <div className="text-white h-screen w-screen bg-no-repeat bg-landing-page-background bg-center bg-cover flex flex-col justify-center items-center overflow-hidden">
      <div className="flex flex-col justify-center items-center z-10">
        <p className="px-5 py-4 text-lg bg-gray-500 rounded-lg my-5">
          Stragan.com
        </p>
        <div className="text-3xl font-semibold flex flex-col justify-center">
          Next level of gaming
          <span className="flex flex-col place-content-end bg-blue-500 h-4 my-5 w-1/2">
            shopping
          </span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full my-4 w-full">
            Log in
          </button>
        </div>
        <button className="absolute top-10 right-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-4">
          Sign up
        </button>
      </div>

      <div className="bg-gray-500 font-bold text-white py-2 rounded-full my-4 w-32 flex justify-center hover:bg-gray-700 absolute bottom-10 right-10">
        <Link to="/">
          Get started
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
    </div>
  );
};
