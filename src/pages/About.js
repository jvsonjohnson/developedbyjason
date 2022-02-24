import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window["animateSlides"]();
  });

  return (
    <>
      <section className="about-page slide">
        <div className="about-main">
          <div className="main-left secondary-text">
            <h2>
              Frontend <br /> Developer
            </h2>
            <p>
              I'm a Front End Developer from Kingston, Jamaica. I enjoy
              designing, developing and maintaining responsive websites and web
              applications. I like to craft modern and minimal front end
              products that are solid and stable with great user expereince and
              cool animations.
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
