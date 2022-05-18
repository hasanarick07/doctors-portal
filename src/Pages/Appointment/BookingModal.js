import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const BookingModal = ({
  bookAppointment,
  date,
  setBookAppointment,
  refetch,
}) => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  const { _id, name, slots } = bookAppointment;
  const formattedDate = format(date, "PPP");
  // console.log(bookAppointment);
  const bookingSubmit = e => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(slot);
    const booking = {
      bookAppointmentId: _id,
      bookAppointment: name,
      date: formattedDate,
      slot,
      patient: user?.email,
      patientName: user?.displayName,
      phone: e.target.phone.value,
    };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then(res => res.json())
      .then(data => {
        if (data?.success) {
          toast.success(`Appointment is set, ${formattedDate} at ${slot} `);
        } else {
          toast.error(
            `Already have an appointment on ${data?.booking?.date} at ${data?.booking?.slot}`
          );
        }
        refetch();
        setBookAppointment(null);
        // console.log(data);
      });
  };
  return (
    <div className="text-black">
      <input type="checkbox" id="my-modal-6" class="modal-toggle " />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="my-modal-6"
            class="btn text-black btn-sm btn-circle absolute right-2 top-2 hover:bg-gradient-to-r from-secondary to-primary"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg text-secondary">Booking For : {name}</h3>
          <form
            onSubmit={bookingSubmit}
            className="grid grid-cols-1 justify-items-center gap-3 text-black modal-action"
          >
            <input
              type="text"
              value={format(date, "PPP")}
              readOnly
              class="input input-ghost bg-white input-accent w-full max-w-xs"
            />

            <div class="form-control w-full max-w-xs">
              <select name="slot" readOnly class="select select-accent">
                {slots?.map(slot => (
                  <option value={slot}>{slot}</option>
                ))}
              </select>
            </div>
            <input
              name="name"
              type="text"
              readOnly
              value={user?.displayName || ""}
              placeholder="Your Name"
              class="input input-ghost input-accent w-full max-w-xs"
            />
            <input
              type="email"
              readOnly
              value={user?.email || ""}
              name="email"
              placeholder="Your Email"
              class="input input-ghost input-accent w-full max-w-xs"
            />
            <input
              type="number"
              name="phone"
              placeholder="Your Phone Number"
              class="input input-ghost input-accent w-full max-w-xs"
            />
            <input
              type="submit"
              class="my-modal-6 btn btn-primary w-full max-w-xs text-white bg-gradient-to-r from-secondary to-primary"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
