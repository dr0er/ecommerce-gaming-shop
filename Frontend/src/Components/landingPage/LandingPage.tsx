import React from "react";
import bg from "../../Assets/background-lp.jpg";

interface Props {}

// React.FC<Props> wymaga od komponentu zeby zwracal jsx

export const LandingPage: React.FC<Props> = (props) => {
  return (
    <div>
      <div>
        <img src={bg} alt="background" />
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
