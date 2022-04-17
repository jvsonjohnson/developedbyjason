import React from "react";
import { Link as Link1 } from "react-router-dom";

const Footer = () => {
  const current = new Date();
  return (
    <>
      <div className="footer">
        <div className="footer-img">
          <Link1 to="/">
            <img src="/dbjlogo.png" alt="" />
          </Link1>
        </div>

        <div className="footer-item">
          <p>
            <i className="fa-solid fa-envelope"></i>jvsonjohnson@gmail.com
          </p>
        </div>
        <div className="footer-link">
          <a
            href="https://www.instagram.com/developedbyjvson/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="copyright">
        Copyright © DevelopedByJvson {current.getFullYear()}. All Rights
        Reserved.
      </div>
    </>
  );
};

export default Footer;
