import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const About = () => {
  useEffect(() => {
    window["animateSlides"]();
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Me</title>
        <meta
          name="description"
          content="I enjoy designing, developing and maintaining custom desktop and mobile websites and web applications. I like to craft modern and minimal front end products that are solid and stable with great user expereince and cool animations."
        />
      </Helmet>
      <section className="about-page slide">
        <div className="about-main">
          <div className="main-left secondary-text">
            <h2>
              Frontend <br /> Developer
            </h2>
            <p>
              Hi, I'm Jason. I'm a Front End Developer from Kingston, Jamaica. I
              enjoy designing, developing and maintaining custom desktop and
              mobile websites and web applications. I like to craft modern and
              minimal front end products that are solid and stable with great
              user expereince and cool animations.
            </p>
            <div className="reveal-text"></div>
          </div>
          <div className="about-pic">
            <img src="/avatar.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
