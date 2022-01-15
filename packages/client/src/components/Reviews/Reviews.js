import React from 'react';

import './style/Reviews.css';
const Reviews = () => {
  return (
    <section id="soldierReviews" className="soldierReviews">
      <div className="common-section-header">
        <h2 className="common-section-heading">Our Soldiers</h2>
        <div className="underline">
          <div className="small-underline"></div>
          <div className="big-underline"></div>
        </div>
      </div>
      <p className="soldierReviews-paragraph">
        We value the input of our Men and Women in Uniform. See just a few of our reviews below!
      </p>
      <div className="soldier-card-wrapper">
        <div className="soldier-card">
          <div className="soldier-image-wrapper">
            <img alt="Soldier 1" src="img/jbrown.png" className="soldier-image" />
          </div>
          <div className="soldier-info">
            <h3 className="soldier-fullname">Jane Deen</h3>
            <p className="soldier-paragraph-1">Gunnery Sergeant - GySgt, US Marine Corps</p>
            <p className="soldier-paragraph-2">
              Home from a recent deployment, I needed space to host my family from out of state during the holidays.
              The home I found amazing! Stay was great and prior to the occupancy, the host ensured we had everything we'd
              need to have a successful, fun, and loving holiday.
            </p>
          </div>
        </div>
        <div className="soldier-card">
          <div className="soldier-image-wrapper">
            <img alt="Soldier 2" src="img/mflowers.png" className="soldier-image" />
          </div>
          <div className="soldier-info">
            <h3 className="soldier-fullname">Mark Powers</h3>
            <p className="soldier-paragraph-1">Seaman Apprentice - SA, US Navy</p>
            <p className="soldier-paragraph-2">
              I'm new to the area and I was having a hard time finding cheap and affordable places to bunk.
              This site was able to help me quickly and easily locate a home with a family that was more than welcoming.
              The spare room they had was perfect for my needs. Thanks!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;