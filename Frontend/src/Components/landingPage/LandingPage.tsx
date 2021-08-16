import React from "react";
import "./LandingPage.css"

interface IProps {}

// React.FC<Props> wymaga od komponentu zeby zwracal jsx

export const LandingPage: React.FC<IProps> = (props) => {
  return (
    <div className="landingPage_Container" >


    <div className="center_Text">
        <p className="stragan_Text">Stragan.com</p>
        <div className="center_Text_Info">
            Next level of gaming {" "} 
            <span className="shopping_Blue" >
              shopping
            </span> 
        </div>
    </div>


        <div className="button_GetStarted">
          Get started
        </div>
    </div>
  );
};
