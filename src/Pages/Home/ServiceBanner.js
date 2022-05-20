import React from "react";
import treatment from "../../assets/images/treatment.png";
import GradientButton from "../Shared/GradientButton";

const ServiceBanner = () => {
  return (
    <div>
      <div className="card md:card-side text-black p-10 md:p-0 md:mt-32">
        <figure className=" h-1/4 basis-1/2">
          <img className="md:w-2/3 rounded-2xl" src={treatment} alt="Movie" />
        </figure>
        <div className="card-body basis-1/2	md:py-32">
          <h2 className="card-title text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <div className="card-actions justify-start">
            <GradientButton>GET STARTED</GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
