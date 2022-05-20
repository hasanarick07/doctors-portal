import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../hooks/useAdmin";
import Loading from "../Shared/Loading/Loading";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <span className="text-4xl font-bold  text-transparent bg-clip-text bg-gradient-to-b from-secondary to-accent  mx-96">
        Welcome To Your Dashboard
      </span>
      <div className="drawer drawer-mobile text-black">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start justify-start p-7">
          <Outlet />
          {/* <!-- Page content here --> */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-42 bg-ghost text-black">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Appointment</Link>
            </li>
            <li>
              <Link to="/dashboard/review">My Review</Link>
            </li>
            {admin && (
              <>
                <li>
                  <Link to="/dashboard/users">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/addDoctor">Add Doctor</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageDoctor">Manage Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
