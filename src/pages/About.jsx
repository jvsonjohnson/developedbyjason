import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "babel-polyfill";
import degree from "../images/degree.jpg";
import me from "../images/me.jpg";
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
            content="I design, develop and maintain custom desktop and mobile websites and web applications and  help
                businesses achieve their greatest potential."
          />
          <link rel="canonical" href="/about" />
        </Helmet>
        <main className="bg-white px-4 md:px-20 lg:px-40 font-Poppins md:text-left text-center">
          <section className="min-h-screen slide">
            {" "}
            <div className="p-6 md:p-10">
              {" "}
              <h2 className="text-4xl py-2 text-primary-green font-bold md:text-6xl">
                Hi I&apos;m Jason
              </h2>
              <h3 className="text-2xl md:text-3xl">Frontend Developer</h3>
              <div className="mx-auto">
                <img
                  className="mx-auto rounded-full h-80 w-80 my-10 object-cover overflow-hidden "
                  src={me}
                  alt=""
                ></img>
              </div>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-3xl mx-auto">
                Hi, I&apos;m Jason. I&apos;m a Front End Developer based in
                Kingston, Jamaica. I enjoy designing, developing and maintaining
                custom device friendly websites and web applications. I like to
                craft modern and minimal front end products that are solid and
                stable with great user experience and cool animations. I also
                help businesses acheive their greatest potential.
              </p>
              <div className="mx-auto h-140 w-80 object-contain py-10">
                <img
                  className=" h-[100%] w-[100%]"
                  src={degree}
                  alt=""
                  layout="responsive"
                ></img>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;
