import React from "react";
import bannerImage from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className="hero min-h-screen text-black">
      <div className="hero-content flex-col lg:flex-row-reverse justify-evenly">
        <img className=" md:w-1/2" src={bannerImage} alt="" />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
