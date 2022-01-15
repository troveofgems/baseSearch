import React from 'react';

import './style/footer.a.styles.css';
const FooterA = () => {
  return (
    <div className="main-part">
      <div className="footer-list-wrapper">
        <h3 className="footer-heading">BaseSearch</h3>
        <ul className="footer-list">
          <li className="footer-list-item">
            <a href="#" className="footer-list-link">
              support@basesearch.com
            </a>
          </li>
          <li className="footer-list-item">
            <a href="#" className="footer-list-link">
              123 Fantasy Ln, Nowhereland ST, 00000
            </a>
          </li>
          <li className="footer-list-item">
            <a href="#" className="footer-list-link">
              Tel: +123 456 789
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-list-wrapper">
        <h3 className="footer-heading">Explore</h3>
        <ul className="footer-list">
          <li className="footer-list-item">
            <a href="#home" className="footer-list-link">
              Home
            </a>
          </li>
          <li className="footer-list-item">
            <a href="#blog" className="footer-list-link">
              Blog
            </a>
          </li>
          <li className="footer-list-item">
            <a href="#about" className="footer-list-link">
              About Us
            </a>
          </li>
          <li className="footer-list-item">
            <a href="#bossListings" className="footer-list-link">
              BOSS Listings
            </a>
          </li>
          <li className="footer-list-item">
            <a href="#famListings" className="footer-list-link">
              Family Listings
            </a>
          </li>
          <li className="footer-list-item">
            <a href="#soldiers" className="footer-list-link">
              Our Soldiers
            </a>
          </li>
          <li className="footer-list-item">
            <a href="#contact" className="footer-list-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div id="contact" className="contact">
        <h3 className="footer-heading">Contact</h3>
        <p>Sign Up For News</p>
        <form className="footer-form">
          <label htmlFor="email-input">
            <input type="text" id="email-input"
                   className="footer-input" placeholder="dkg@ttog.tech"
            />
          </label>
          <button className="footer-btn">Sign Up</button>
        </form>
      </div>
      <div className="gallery">
        <h3 className="footer-heading">Gallery</h3>
        <div className="gallery-images">
          <div className="image-wrapper">
            <img alt="Gallery Image Carousel" src="img/gallery-img-1.jpeg" className="footer-image"/>
          </div>
          <div className="image-wrapper">
            <img alt="Gallery Image Carousel" src="img/gallery-img-2.jpeg" className="footer-image"/>
          </div>
          <div className="image-wrapper">
            <img alt="Gallery Image Carousel" src="img/gallery-img-3.jpeg" className="footer-image"/>
          </div>
          <div className="image-wrapper">
            <img alt="Gallery Image Carousel" src="img/gallery-img-4.jpeg" className="footer-image"/>
          </div>
          <div className="image-wrapper">
            <img alt="Gallery Image Carousel" src="img/gallery-img-5.jpeg" className="footer-image"/>
          </div>
          <div className="image-wrapper">
            <img alt="Gallery Image Carousel" src="img/gallery-img-6.jpeg" className="footer-image"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterA;