import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const TopButton = ({ GoogleButton, isGoBack }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    console.log("goback was called");
    navigate(-1);
  };

  const handleNavigatePages = () => {
    console.log("navigate was called");
    console.log(isGoBack);
    navigate(
      window.location.pathname.includes("register")
        ? "/user/login"
        : "/user/register",
    );
  };

  return (
    <>
      <button
        className={`btn authpage_floatingbtn ${
          isGoBack ? "authpage_goback" : ""
        }`}
        onClick={() => {
          isGoBack ? handleGoBack() : handleNavigatePages();
        }}
      >
        {isGoBack ? (
          <div>
            <FiArrowLeft style={{ fontSize: "15px" }} /> Go back
          </div>
        ) : (
          <>
            {window.location.pathname.includes("register")
              ? "Have an account? Login"
              : "New to Milan? Register"}
          </>
        )}
      </button>

      {GoogleButton && (
        <button className="btn authpage_googlebtn">
          <FcGoogle style={{ fontSize: "20px", marginRight: "0.7rem" }} />

          {window.location.pathname.includes("register")
            ? "Sign up"
            : "Sign in"}
        </button>
      )}
    </>
  );
};

export default TopButton;