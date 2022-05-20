import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";

const AddDoctor = () => {
  const { data, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/service").then(res => res.json())
  );
  // console.log(data.name);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = "b16b0c020cf429ae6bf3f8bfc6733ee8";

  const onSubmit = async data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then(res => res.json())
            .then(inserted => {
              if (inserted.insertedId) {
                toast.success("Doctor Added successfully");
                reset();
              } else {
                toast.error("failed to add doctor");
              }
            });
        }
      });
    console.log(data);
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-3xl">Add a New Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-black">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-ghost bg-white input-accent w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label p-0">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-ghost bg-white input-accent w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
          />
          <label className="label p-0">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-black">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            name="specialty"
            readOnly
            className="select select-accent"
          >
            {data?.map(data => (
              <option key={data._id} value={data.name}>
                {data.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-black">Photo</span>
          </label>
          <input
            type="file"
            className="input input-ghost bg-white input-accent w-full max-w-xs py-1.5"
            {...register("image")}
          />
          <label className="label p-0">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <input
          className="btn  btn-accent hover:text-white w-full max-w-xs mt-5"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
