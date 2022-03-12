import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "babel-polyfill";

const About = () => {
  useEffect(() => {
    window["animateSlides"]();
  });

  return (
    <>
      <div className="about">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About Me</title>
          <meta
            name="description"
            content="I design, develop and maintain custom desktop and mobile websites and web applications that are solid and stable with great user experience."
          />
          <link rel="canonical" href="/about" />
        </Helmet>
        <section className="about-page slide">
          <div className="about-main">
            <div className="main-left secondary-text">
              <h1>
                Frontend <br /> Developer
              </h1>
              <p>
                Hi, I'm Jason. I'm a Front End Developer based in Kingston,
                Jamaica. I enjoy designing, developing and maintaining custom
                device friendly websites and web applications. I like to craft
                modern and minimal front end products that are solid and stable
                with great user experience and cool animations.
              </p>
              <div className="reveal-text"></div>
            </div>
            <div className="about-pic">
              <img src="/me.jpg" alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
