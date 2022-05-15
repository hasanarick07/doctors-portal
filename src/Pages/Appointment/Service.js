import React from "react";

const Service = ({ service, setBookAppointment }) => {
  const { name, slots } = service;
  return (
    <div class="card md:w-lg text-black shadow-xl text-center">
      <div class="card-body">
        <h2 class="card-title text-secondary mx-auto">{name}</h2>
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
        <div class="card-actions justify-center">
          <label
            onClick={() => setBookAppointment(service)}
            disabled={slots.length === 0}
            for="my-modal-6"
            class="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
