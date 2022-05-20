import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card bg-base-100 shadow-xl md:mt-20">
      <div className="card-body">
        <p>{review.review}</p>
        <div className="">
          <div className=" items-center flex mt-3">
            <div className="w-1/6 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={review.img} alt="" />
            </div>
            <div className="ml-3">
              <h1 className="text-lg">{review.name}</h1>
              <h1 className="text-SM">{review.location}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
