import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window["animateSlides"]();
  });

  return (
    <div className="home">
      {/* main section */}
      <section className="main slide">
        <div className="main-left">
          <p className="primary-text">
            Do You Want a Custom Device Friendly, Modern, Minmal and
            Professional Website or want to redesign your existing site, then
            you are at the right place.
          </p>
          <p className="secondary-text">
            Responsive, Optimized & User Friendly on all devices.
          </p>
          <div className="reveal-text"></div>
        </div>
        <div className="main-right">
          <img src="/main.svg" alt="" />
          <div className="reveal-img"></div>
        </div>
      </section>
      {/* services section */}
      <section id="services" className="slide">
        <br />
        <br />
        <h1>Services</h1>
        <p className="service-text">
          I Help Start-ups, Businesses and Agencies Achieve High Quality
          Websites and Exceptional User Experience.
        </p>
        <div className="services">
          <div className="service-left">
            <img className="service-img" src="/services.svg" alt="" />
            <div className="reveal-img"></div>
          </div>
          <div className="service-left">
            <ul className="service-list">
              <li className="">
                <i className="fa-solid fa-check"></i>
                Transform a user interface design (sketch, mockup) into reality
              </li>
              <li className="">
                <i className="fa-solid fa-check"></i>
                Design and develop websites user interfaces within a week.
              </li>
              <li className="">
                <i className="fa-solid fa-check"></i>
                Maintenance and optimization of websites & the option for a
                CMS(Content Management System)
              </li>
              <li className="">
                <i className="fa-solid fa-check"></i>Implement SEO(Search Engine
                Optimization) practices
              </li>
              <li className="">
                <i className="fa-solid fa-check"></i>Ensure device compatability
              </li>
              <li className="">
                <i className="fa-solid fa-check"></i>Social media marketing
                (Google, Facebook, Instagram)
              </li>
              <li className="">
                <i className="fa-solid fa-check"></i>Graphic design and content
                design
              </li>
            </ul>
            <div className="reveal-text"></div>
          </div>
        </div>
      </section>
      <br />

      {/* work section */}
      <section id="work">
        <br />

        <h1 className="title">My Work</h1>
        <div className="work">
          <div className="card">
            <img src="/dermakare.png" alt="" />
            <div className="card-text">
              <p className="card-title">mydermakare.com</p>
              <p className="card-description">
                Derma Kare Skin & Body Centre specializes in General and
                aesthetic dermatology, health and non surgical weight loss
                procedures in Jamaica.
              </p>
              <a
                href="https://mydermakare.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button> Visit Site</button>
              </a>
            </div>
          </div>
          <div className="card">
            <img src="/travel-website.png" alt="" />
            <div className="card-text">
              <p className="card-title">Travel</p>
              <p className="card-description">
                A clean and simple 1 page site with nice animations
              </p>

              <a href="https://travel-animations.netlify.app/">
                <button> Visit Site</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
