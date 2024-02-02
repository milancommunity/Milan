import React, { useContext } from "react";
import "./Banner.css";
import Cookies from "js-cookie";
import { ImGithub } from "react-icons/im";
import Button from "../Button/GlobalButton/Button";
import { modeContext } from "../../App";
const HomeBanner = () => {
  const { dark } = useContext(modeContext);
  return (
    <div className={dark ? "dark-body" : ""}>
      <div className={`container`}>
        <div className="banner_mainparent">
          <div className="banner_subparent">
            <div className="banner_textdiv">
              <h1 className={`banner_header1 ${dark ? "dark-header1" : ""} `}>
                Collaborate. <br /> Connect. <br /> Build.
              </h1>
              <div>
                <p
                  className={`banner_header3 ${
                    dark ? "banner_header3-dark" : ""
                  }`}
                >
                  Welcome to Milan, a platform to <span>connect</span> NGOs,
                  <br />
                  Charities, and you to <span>collaborate</span> and <br />{" "}
                  <span>build</span> a better tomorrow.
                </p>
              </div>

              <div className="banner_signup_btndiv">
                <div className="banner_btn_div">
                  {Cookies.get("isLoggedIn") ? (
                    Cookies.get("usertype") === "club" ? (
                      <Button
                        className="banner_signup_btn"
                        data-cy="landingpage-club-signup"
                        id="landingpage-club-signup"
                        variant="solid"
                        to="/auth/signup"
                      >
                        Create an event
                      </Button>
                    ) : (
                      <Button
                        className="banner_signup_btn"
                        data-cy="landingpage-club-signup"
                        id="landingpage-club-signup"
                        variant="solid"
                        to="/shop"
                      >
                        Checkout our shop
                      </Button>
                    )
                  ) : (
                    <Button
                      className={`banner_signup_btn ${
                        dark ? "banner_signup_btn_dark" : ""
                      }`}
                      data-cy="landingpage-club-signup"
                      id="landingpage-club-signup"
                      variant="solid"
                      to="/auth/signup"
                    >
                      Sign up now
                    </Button>
                  )}
                  <Button
                    className={`banner_signup_btn ${
                      dark ? "banner_signup_btn-dark" : ""
                    }`}
                    to="https://github.com/MilanCommunity/Milan"
                    target="_blank"
                    rel="noreferrer"
                    variant="outline"
                  >
                    <ImGithub
                      className={
                        dark
                          ? "banner_contribute_logo-dark"
                          : "banner_contribute_logo"
                      }
                    />
                    Git Milan
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
