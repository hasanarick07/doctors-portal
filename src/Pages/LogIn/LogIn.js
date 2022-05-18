import React, { useEffect } from "react";
import auth from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import useToken from "../hooks/useToken";

const LogIn = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [token] = useToken(user || googleUser);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loading || googleLoading) {
    return <Loading></Loading>;
  }

  if (error || googleError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || googleUser?.message}</small>
      </p>
    );
  }
  const onSubmit = data => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="flex h-[80vh] justify-center items-center text-black text-center">
      <div class="card md:w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-4xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text text-black">Email</span>
              </label>
              <input
                {...register("email", {
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Email is Required", // JS only: <p>error message</p> TS only support string
                  },
                  required: { value: true, message: "Provide a valid Email" },
                })}
                type="text"
                placeholder="Your Email"
                class="input input-ghost bg-white input-accent w-full max-w-xs "
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
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-ghost bg-white input-accent w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <input
              type="submit"
              value="Submit"
              class="btn  btn-accent hover:text-white w-full max-w-xs"
            />
          </form>
          <p>
            <small>
              New to Doctors Portal{" "}
              <Link className="text-primary" to="/signup">
                Create New Account
              </Link>
            </small>
          </p>
          <div class="divider m-0 text-black">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            class="btn btn-outline btn-accent hover:text-white w-full max-w-xs"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
