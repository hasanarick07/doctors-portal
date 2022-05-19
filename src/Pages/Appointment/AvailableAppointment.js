import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [bookAppointment, setBookAppointment] = useState({});
  const formattedDate = format(date, "PPP");
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(
      `https://glacial-anchorage-46578.herokuapp.com/available?date=${formattedDate}`
    ).then(res => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  // useEffect(() => {
  //   fetch(`https://glacial-anchorage-46578.herokuapp.com/available?date=${formattedDate}`)
  //     .then(res => res.json())
  //     .then(data => setServices(data));
  // }, [formattedDate]);
  return (
    <div>
      <h4 className="text-2xl text-secondary text-center">
        Available Appointments on : {format(date, "PPP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services?.map(service => (
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
          refetch={refetch}
          bookAppointment={bookAppointment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
