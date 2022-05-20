import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import DoctorRow from "./DoctorRow";

const ManageDoctor = () => {
  const { data, isLoading, refetch } = useQuery("doctor", () =>
    fetch("http://localhost:5000/doctor", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then(res => res.json())
  );
  console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-3xl font-medium">Manage Doctors : {data?.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="bg-slate-200"></th>
              <th className="bg-slate-200">Avatar</th>
              <th className="bg-slate-200">Name</th>
              <th className="bg-slate-200">Specialty</th>
              <th className="bg-slate-200">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((data, index) => (
              <DoctorRow
                key={data._id}
                index={index}
                data={data}
                refetch={refetch}
              ></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
