import React from 'react';

import './style/About.css';
const About = () => {
  return (
    <section id="about" className="about-us">
      <div className="about-us-content">
        <h1 className="about-us-heading">
          About Us
        </h1>
        <div className="underline">
          <div className="small-underline"/>
          <div className="big-underline"/>
        </div>
        <h3 className="sub-header">
          BaseSearch
        </h3>
        <p className="about-us-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus id
          obcaecati officiis, soluta suscipit voluptas voluptatem. Consectetur dolor dolorum excepturi fugit harum
          nulla, numquam quibusdam quo ratione sapiente similique soluta!
        </p>
        <button className="about-us-btn" type={"button"} onClick={() => {alert("More Verbiage!")}}>
          <span className={"about-us-btn-label"}>Read More{' '}</span>
          <i className="fas fa-angle-double-right btn-arrow"/>
        </button>
      </div>
      <div className="about-us-images">
        <img src="img/about-us-img-1.jpeg" alt="Image 1" className="image image-1"/>
        <img src="img/about-us-img-2.jpeg" alt="Image 2" className="image image-2"/>
        <img src="img/about-us-img-3.jpeg" alt="Image 3" className="image image-3"/>
        <img src="img/about-us-img-4.jpeg" alt="Image 4" className="image image-4"/>
      </div>
    </section>
  );
};

export default About;