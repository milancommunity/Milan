import React from "react";
import { Button } from "./shared";
import Tick from '../assets/pictures/Tick.png';
import JoinusFrame from '../assets/pictures/JoinusFrame.png';
import "./Joinus.scss";

const Joinus = () => {
  return (
    <>
      <div className="container  js_mainparent">

        <div className="joinus_left_section">
          <img src={JoinusFrame} alt="" className="joinus_image"/>
        </div>

        <div className="joinus_right_section">
          <div className="label">
            <span className="label_text">JOIN FOR FREE</span>
          </div>
          
          <div className="right_parent">
            <div className="content">
              <div className="frame_130">
                <h2>
                  Register within minutes
                </h2>
                <div className="body">
                    <p>
                      As an NGO / Charity / Club, you can create events and collaborate
                      with other orgs. As a user, you can subscribe to these said orgs for
                      free.
                    </p>
                  </div>
              </div>


              <div className="frame_131">
                <div className="frame_89">
                    <img src={Tick} alt="" className="frame89_img"/>
                    <p className="frame89_text">Easy, one minute sign up</p>
                  </div>

                  <div className="frame_90">
                    <img src={Tick} alt="" className="frame90_img"/>
                    <p className="frame90_text">Be an NGO, charity or just a user</p>
                  </div>
              </div>
           

            </div>
            
              <Button className="joinus_button">
                <span>Join Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  className="navbar_cta_arrow"
                >
              <path
                d="M22.6379 1.68188C23.2552 1.68226 23.8472 1.92766 24.2837 2.36418C24.7202 2.80069 24.9656 3.39262 24.966 4.00994L24.966 22.6784C24.9656 23.2957 24.7202 23.8877 24.2837 24.3242C23.8472 24.7607 23.2552 25.0061 22.6379 25.0065L3.96944 25.0065C3.36618 24.9848 2.7948 24.7302 2.3754 24.296C1.956 23.8619 1.72123 23.2821 1.72043 22.6784C1.72123 22.0748 1.956 21.4949 2.3754 21.0608C2.79481 20.6266 3.36618 20.372 3.96943 20.3503L17.0154 20.3503L0.675002 4.00994C0.238132 3.57307 -0.00729571 2.98055 -0.00729703 2.36273C-0.00729566 1.7449 0.238133 1.15238 0.675002 0.715508C1.11187 0.278639 1.7044 0.0332108 2.32222 0.0332088C2.94005 0.0332095 3.53257 0.278639 3.96944 0.715508L20.3098 17.0559L20.3098 4.00994C20.3102 3.39262 20.5556 2.80069 20.9921 2.36418C21.4286 1.92766 22.0206 1.68226 22.6379 1.68188Z"
                fill="white"
              />
            </svg>

              </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Joinus;
