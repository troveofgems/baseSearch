import React from 'react';

import "./style/Landing.css";
const Landing = ({executeScroll}) => {
  return (
    <header id={"siteLanding"} className={"landing"}>
      <div className={"brand"}>
        <i className={"fas fa-hiking brandLogoFAI"} />
        <h3 className={"brand-heading"}>BaseSearch</h3>
      </div>
      <div className={"banner"}>
        <h3 className={"banner-heading"}>Welcome To BaseSearch!</h3>
        <p className={"banner-paragraph"}>
          Pairing Soldiers, Their Families, & Rooms At Unheard-Of Prices
        </p>
        <button className={"banner-btn"} onClick={() => executeScroll()}
        >Browse Our BOSS & Family Listings</button>
      </div>
    </header>
  );
};

export default Landing;