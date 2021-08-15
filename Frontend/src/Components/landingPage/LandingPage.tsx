import React from "react";
import bacgroundImage from "../../Assets/background-lp.jpg";

interface IProps {}

// React.FC<Props> wymaga od komponentu zeby zwracal jsx

export const LandingPage: React.FC<IProps> = (props) => {
  return (
    <div>
      <div>
        <img src={bacgroundImage} alt="background" />
      </div>
      <div>
        <h2>Stragan.com</h2>
      </div>
      <div>
        <h1>Next level of gaming shopping</h1>
      </div>
      <div>
        <div>Get started</div>
      </div>
    </div>
  );
};
