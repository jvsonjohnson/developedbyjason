import { React, useEffect, useState } from "react";
import { Link as Link1, NavLink, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="drop-shadow-sm bg-white">
      <div className="logo">
        <Link1 to="/" onClick={() => setIsMobile(false)}>
          <img src="/dbjlogo.png" alt="Home" />
        </Link1>
      </div>

      <nav
        className={isMobile ? "mobile-links" : "desktop-links"}
        onClick={() => setIsMobile(false)}
      >
        <ul className="nav-links">
          {/* <li>
            <Link1 to="/" className="active">
              Home
            </Link1>
          </li> */}
          {/* <li>
            <Link1 to="/#services" className="active">
              Services
            </Link1>
          </li> */}
          {/* <li>
            <Link1 to="/#work" className="active">
              My Work
            </Link1>
          </li> */}
          <li>
            <NavLink to="/about" className="active">
              About
            </NavLink>
          </li>
        </ul>
        <Link1 to="/contact">
          <button className="bg-primary-green text-white py-2 px-2 rounded-md md:px-4 md:py-4 leading-3 text-sm">
            {" "}
            Contact me
          </button>
        </Link1>
      </nav>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <CloseIcon></CloseIcon> : <MenuIcon></MenuIcon>}
      </button>
    </header>
  );
};

export default Navbar;
