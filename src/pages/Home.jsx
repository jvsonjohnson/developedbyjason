import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "babel-polyfill";

const Home = () => {
  useEffect(() => {
    window["animateSlides"]();
  });

  return (
    <div className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>DevelopedByJason</title>
        <meta
          name="description"
          content="Do You Need a Custom Device Friendly, Professional Website OR need
            Digital Marketing Services? Then you are at the Right Place."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      {/* main section */}
      <section className="main slide">
        <div className="main-left">
          <p className="primary-text">
            Do You Need a Custom Device Friendly, Professional Website OR need
            Digital Marketing Services? Then you are at the Right Place.
          </p>
          <p className="secondary-text">
            Responsive, Optimized & User Friendly on all devices. <br />3 +
            Years Of Experience
          </p>
          <div className="reveal-text"></div>
          {/* <div className="lets-talk">
            <Link to="/contact">
              Lets Talk... <i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div> */}
        </div>
        <div className="main-right">
          <img src="/main.svg" alt="main svg" />
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
                Design and develop (sketch, mockup) website user interfaces.
              </li>
              <li className="">
                <i className="fa-solid fa-check"></i>
                Transform any user interface design (sketch, mockup) into
                reality.
              </li>
              <li className="">
                <i className="fa-solid fa-check"></i>
                Maintenance and optimization of websites & the option for a
                CMS(Content Management System).
              </li>
              <li className="">
                <i className="fa-solid fa-check"></i>Implement SEO(Search Engine
                Optimization) practices.
              </li>
              <li className="">
                <i className="fa-solid fa-check"></i>Ensure mobile device
                compatability.
              </li>
              <li className="">
                <i className="fa-solid fa-check"></i>Digital Marketing.
              </li>
              <li className="">
                <i className="fa-solid fa-check"></i>Graphic Design and Content
                Creation.
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
            <img src="/travel.png" alt="" />
            {/* <video src="/travel.mp4" loop controls></video> */}
            <div className="card-text">
              <p className="card-title">Travel</p>
              <p className="card-description">
                Design built from scratch using HTML, CSS & JavaScript, with
                cool animations.
              </p>

              <a
                href="https://travel-animations.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button> Visit Site</button>
              </a>
            </div>
          </div>

          {/* <div className="card">
            <img src="/trvlbyjason.netlify.png" alt="" />
            <div className="card-text">
              <p className="card-title">TRVL</p>
              <p className="card-description">
                Design built from scratch using React JS.
              </p>

              <a
                href="https://trvlbyjason.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button> Visit Site</button>
              </a>
            </div>
          </div> */}

          <div className="card">
            <video src="/Pets.mp4" loop controls></video>
            <div className="card-text">
              <p className="card-title">Pets</p>
              <p className="card-description">
                A cool fullscreen animation done with JavaScript.
              </p>

              <a
                href="https://jvsonjohnson.github.io/pets/"
                target="_blank"
                rel="noreferrer"
              >
                <button> Visit Site</button>
              </a>
            </div>
          </div>

          <div className="card">
            <img src="/fila.png" alt="" />
            <div className="card-text">
              <p className="card-title">FILA.</p>
              <p className="card-description">
                Design built from scratch using React JS.
              </p>

              <a
                href="https://fila-store.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
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
