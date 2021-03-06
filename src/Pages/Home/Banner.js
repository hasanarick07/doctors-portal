import React from "react";
import bannerImage from "../../assets/images/chair.png";
import bgImage from "../../assets/images/bg.png";
import GradientButton from "../Shared/GradientButton";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen text-black"
        style={{ backgroundImage: `url(${bgImage})`, height: "600px" }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImage}
            alt=""
            className="md:w-1/2 rounded-lg shadow-2xl"
          />
          <div className=" basis-1/2">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <GradientButton>GET STARTED</GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
