import React from "react";
import toast from "react-hot-toast";

const DoctorRow = ({ data, refetch, index }) => {
  const { name, specialty, img, email } = data;
  const handleDelete = email => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (result.deletedCount) {
          toast.success(`Doctor :${name} is Deleted`);
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-20 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>

      <td>
        <button
          onClick={() => handleDelete(email)}
          className="btn btn-xs btn-error"
        >
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
