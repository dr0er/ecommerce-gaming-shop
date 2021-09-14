<<<<<<< HEAD
import React from 'react'
import './LandingPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const LandingPage = () => {
  return (
    <div className="landingPage_Container">
      <div className="center_Text">
        <p className="stragan_Text">Stragan.com</p>
        <div className="center_Text_Info">
          Next level of gaming <span className="shopping_Blue">shopping</span>
        </div>
      </div>

      <div className="button_GetStarted">
        <Link to="/">
          Get started
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
    </div>
  )
}
=======
import React from "react";
import "./LandingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface IProps {}

// React.FC<Props> wymaga od komponentu zeby zwracal jsx

export const LandingPage: React.FC<IProps> = (props) => {
  return (
    <div className="landingPage_Container">
      <div className="center_Text">
        <p className="stragan_Text">Stragan.com</p>
        <div className="center_Text_Info">
          Next level of gaming <span className="shopping_Blue">shopping</span>
        </div>
      </div>

      <div className="button_GetStarted">
        <Link to="/signup">
          Get started
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
    </div>
  );
};
>>>>>>> aabb4c4... basic features added
