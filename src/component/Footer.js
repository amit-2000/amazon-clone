import React from "react";
import "./fotter.css";
function Footer() {
  return (
    <div className="curved-div">
      <div className="footer__svg__container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#232f3e"
            fillOpacity="1"
            d="M0,192L48,181.3C96,171,192,149,288,144C384,139,480,149,576,160C672,171,768,181,864,186.7C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            styles="user-select: auto;"
          ></path>
        </svg>
        <div className="footer__text__container">
          <h3 className="footer__grettings">Say Hi!</h3>
          <div className="fotter__socialmedia__icon">
            <a
              href="https://www.linkedin.com/in/amit-perane-91882a196"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                className="icon__img"
                alt="Linkdin"
              />
            </a>

            <a
              href="https://github.com/amit-2000/amazon-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                className="icon__img"
                alt="gitHub"
              />
            </a>
            <a
              href="https://www.instagram.com/amiit_0001/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="https://cdn-icons.flaticon.com/png/512/3955/premium/3955024.png?token=exp=1638946411~hmac=fefbc4bb1c472e23f89b66f3ffd7a808"
                className="icon__img"
                alt="instagram"
              />
            </a>
          </div>
        </div>

        {/* <div className="footer__svg-2">
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#232f3e"
              fill-opacity="1"
              d="M0,192L48,181.3C96,171,192,149,288,144C384,139,480,149,576,160C672,171,768,181,864,186.7C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              styles="user-select: auto;"
            ></path>
          </svg>
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
