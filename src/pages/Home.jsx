import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "babel-polyfill";

import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillCheckCircle,
} from "react-icons/ai";
import dermakare from "../images/dermakare.png";
import apex from "../images/ApexMarkets.png";
import travel from "../images/travel.png";

const Home = () => {
  useEffect(() => {
    window["animateSlides"]();
  });

  return (
    <div className="">
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
      <main className="bg-white md:px-20 lg:px-40 font-Poppins md:text-left text-center">
        <section className="slide">
          <div className="pt-10 md:pt-20 md:px-10 px-6 flex flex-col lg:flex-row hero-container gap-6 justify-center items-center">
            <div className="hero-content">
              {/* <h2 className="text-4xl py-2 text-primary-green font-medium md:text-6xl">
                Hi I&apos;m Jason
              </h2> */}
              {/* <h3 className="text-2xl md:text-3xl">
                Experienced Frontend Developer
              </h3> */}
              <p className="text-md py-5 leading-8 text-gray-800 md:text-2xl max-w-4xl">
                Do You Need a Custom, Device Friendly Website OR need Digital
                Marketing Services? Then you are at the Right Place.
              </p>
              <p className="font-bold md:text-xl max-w-3xl text-md text-primary-green">
                Responsive, Optimized & User Friendly on all devices. 3 + Years
                Of Experience
              </p>
              <div className="flex justify-center gap-4 text-gray-600 text-5xl md:text-left md:justify-start pt-8">
                <a
                  href="https://www.instagram.com/developedbyjvson/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram></AiFillInstagram>
                </a>
                <a
                  href="https://www.linkedin.com/in/jvsonjohnson"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin></AiFillLinkedin>
                </a>
              </div>
            </div>
            <div className="hero-image mx-auto">
              <img
                src="/main.svg"
                alt=""
                className="h-60 w-90 my-4 object-contain"
              />
            </div>
          </div>
          <div className="px-8 md:py-4 md:pt-20 md:px-10 slide">
            <h3 className="text-3xl py-4 font-bold">Services</h3>
            <p className="text-md leading-8 text-gray-800 md:text-xl py-2">
              I Help{" "}
              <span className="text-primary-green font-bold">
                Start-ups, Businesses and Agencies
              </span>{" "}
              Achieve High Quality Websites and Exceptional User Experience.
            </p>
            <img
              src="/services.svg"
              alt=""
              className="h60 w-80 mx-auto my-8 md:mx-0 object-contain"
            />
            <ul className="flex flex-col gap-4 text-md md:text-xl text-left py-4 px-8">
              <li className="flex items-center gap-2">
                <AiFillCheckCircle className="shrink-0 text-xl" /> Design and
                develop (sketch, mockup) website user interfaces.
              </li>
              <li className="flex items-center gap-2">
                <AiFillCheckCircle className="shrink-0 text-xl" /> Transform any
                user interface design (sketch, mockup) into reality.
              </li>
              <li className="flex items-center gap-2">
                <AiFillCheckCircle className="shrink-0 text-xl" />
                Maintenance and optimization of websites & the option for a
                CMS(Content Management System).
              </li>
              <li className="flex items-center gap-2">
                <AiFillCheckCircle className="shrink-0 text-xl" />
                Implement SEO(Search Engine Optimization) practices.
              </li>
              <li className="flex items-center gap-2">
                <AiFillCheckCircle className="shrink-0 text-xl" />
                Ensure mobile device compatability.
              </li>
              <li className="flex items-center gap-2">
                <AiFillCheckCircle className="shrink-0 text-xl" />
                Digital Marketing.
              </li>
              <li className="flex items-center gap-2">
                <AiFillCheckCircle className="shrink-0 text-xl" />
                Graphic Design and Content Creation.
              </li>
            </ul>
            <div className="reveal-text"></div>
          </div>
        </section>

        <section id="work">
          <div className="p-6 md:p-10">
            <h3 className="text-3xl font-bold">My Work</h3>
          </div>
          <div className="px-10 md:px-10 flex flex-col mb-10 gap-10 lg:flex-row lg:flex-wrap md:grid lg:grid-cols-2">
            <div className="drop-shadow-lg pb-10  bg-white rounded-lg hover:scale-105 transition ease-in-out duration-300">
              <a
                href="https://mydermakare.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={dermakare}
                  className="rounded-lg object-cover"
                  alt=""
                ></img>

                <div className="p-2">
                  <h2 className="text-3xl py-2">
                    DermaKare Skin & Body Centre
                  </h2>
                  <p>
                    Derma Kare Skin & Body Centre specializes in General and
                    aesthetic dermatology, health and non surgical weight loss
                    procedures in Jamaica.
                  </p>
                </div>
              </a>
            </div>
            <div className="drop-shadow-lg pb-10 bg-white rounded-lg hover:scale-105 transition ease-in-out duration-300">
              <a
                href="https://apexmarkets.io/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={apex}
                  layout="responsive"
                  className="rounded-lg object-cover"
                  alt=""
                ></img>
                <div className="p-2">
                  <h2 className="text-3xl py-2">Apex Markets</h2>
                  <p>
                    Developed Front End User Interface for Apex Markets Trading
                    Platform.
                  </p>
                </div>
              </a>
            </div>
            <div className="drop-shadow-lg pb-10 bg-white rounded-lg hover:scale-105 transition ease-in-out duration-300">
              <a
                href="https://travel-animations.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={travel}
                  layout="responsive"
                  className="rounded-lg object-cover"
                  alt=""
                ></img>
                <div className="p-2">
                  <h2 className="text-3xl py-2">Travel</h2>
                  <p>
                    Website built from scratch using HTML, CSS & JavaScript,
                    with cool animations.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* <section className="main slide">
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
      
        </div>
        <div className="main-right">
          <img src="/main.svg" alt="main svg" />
          <div className="reveal-img"></div>
        </div>
      </section> */}
      {/* services section */}
      {/* <section id="services" className="slide">
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
      <br /> */}
      {/* work section */}
      {/* <section id="work">
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
      </section> */}
    </div>
  );
};

export default Home;
