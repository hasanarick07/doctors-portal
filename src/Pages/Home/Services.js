import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";
import cavity from "../../assets/images/cavity.png";
import Service from "./Service";
import ServiceBanner from "./ServiceBanner";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: cavity,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: whitening,
    },
  ];
  return (
    <div className=" my-7 md:my-28">
      <div className="text-center text-black">
        <h1 className="text-xl text-secondary font-bold">OUR SERVICES</h1>
        <h1 className="text-4xl">Services We Provide</h1>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 w-11/12 md:w-full mx-auto md:px-5">
        {services.map(service => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      <ServiceBanner />
    </div>
  );
};

export default Services;
