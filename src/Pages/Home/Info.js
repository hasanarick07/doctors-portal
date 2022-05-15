import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5 w-11/12 md:w-full mx-auto md:px-5">
      <InfoCard
        cardTitle="Opening Hours"
        cardBody="Lorem Ipsum is simply dummy text of the pri"
        img={clock}
        bgColor="bg-gradient-to-r from-secondary to-primary"
      />
      <InfoCard
        cardTitle="Visit our location"
        cardBody="Brooklyn, NY 10036, United States"
        img={marker}
        bgColor="bg-accent"
      />
      <InfoCard
        cardTitle="Contact us now"
        cardBody="+000 123 456789"
        img={phone}
        bgColor="bg-gradient-to-r from-secondary to-primary"
      />
    </div>
  );
};

export default Info;
