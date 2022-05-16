import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [bookAppointment, setBookAppointment] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div>
      <h4 className="text-2xl text-secondary text-center">
        Available Appointments on : {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services.map(service => (
          <Service
            key={service._id}
            service={service}
            setBookAppointment={setBookAppointment}
          ></Service>
        ))}
      </div>
      {bookAppointment && (
        <BookingModal
          setBookAppointment={setBookAppointment}
          date={date}
          bookAppointment={bookAppointment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
