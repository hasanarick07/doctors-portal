import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const newDate = date ? date : new Date();
    return (
        <div>
           <AppointmentBanner date={newDate} setDate={setDate} /> 
           <AvailableAppointment  date={newDate}/>
        </div>
    );
};

export default Appointment;