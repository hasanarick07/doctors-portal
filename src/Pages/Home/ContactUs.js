import React from "react";
import appointment from "../../assets/images/appointment.png";
import GradientButton from "../Shared/GradientButton";

const ContactUs = () => {
  return (
    <div
      className="mt-36 text-center"
      style={{ backgroundImage: `url(${appointment})`, height: "600px" }}
    >
      <div className="pt-16 pb-8">
        <h1 className="text-xl text-secondary font-semibold">Contact Us</h1>
        <h1 className="text-3xl text-white font-semibold">
          Stay connected with us
        </h1>
      </div>
      <form>
        <input
          className="rounded w-5/6 md:w-2/5 mt-5 p-2"
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
        />
        <br />
        <input
          className="rounded w-5/6 md:w-2/5 mt-5 p-2"
          type="text"
          name=""
          id=""
          placeholder="Subject"
        />
        <br />
        <textarea
          className="rounded my-5 p-2 w-5/6 md:w-2/5"
          name="text"
          id=""
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <br />
        <GradientButton>Submit</GradientButton>
      </form>
    </div>
  );
};

export default ContactUs;
