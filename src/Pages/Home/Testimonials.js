import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Winson Herry",
      location: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
    {
      id: 2,
      name: "Winson Herry",
      location: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
    },
    {
      id: 3,
      name: "Winson Herry",
      location: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
    },
  ];
  return (
    <section className="text-black">
      <div className="flex justify-between items-center">
        <div className="p-5">
          <h1 className="text-xl text-secondary font-medium">Testimonial</h1>
          <h1 className="text-3xl">What Our Patients Says</h1>
        </div>
        <div>
          <img className="w-1/2 ml-auto" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
