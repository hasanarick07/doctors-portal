import React from "react";

const Service = ({ service, setBookAppointment }) => {
  const { name, slots } = service;
  return (
    <div className="card md:w-lg text-black shadow-xl text-center">
      <div className="card-body">
        <h2 className="card-title text-secondary mx-auto">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-600">Sorry!!! Try Another Date</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available{" "}
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setBookAppointment(service)}
            disabled={slots.length === 0}
            htmlFor="my-modal-6"
            className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
