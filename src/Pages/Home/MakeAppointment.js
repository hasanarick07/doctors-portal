import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import GradientButton from "../Shared/GradientButton";

const MakeAppointment = () => {
  return (
    <section
      className="md:flex justify-center items-center"
      style={{ backgroundImage: `url(${appointment})` }}
    >
      <div className="basis-1/2 ">
        <img className="md:mt-[-130px] hidden md:block" src={doctor} alt="" />
      </div>
      <div className="basis-1/2 p-5">
        <h1 className="font-bold text-secondary text-xl">Appointment</h1>
        <h1 className="font-bold text-4xl">Make an appointment Today</h1>
        <p className="py-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <GradientButton>GET STARTED</GradientButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
