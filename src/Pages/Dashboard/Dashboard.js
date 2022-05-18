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
    <div class="drawer drawer-mobile text-black">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        {/* <!-- Page content here --> */}
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-42 bg-ghost text-black">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Sidebar Item 1</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Sidebar Item 2</Link>
          </li>
          {admin && (
            <li>
              <Link to="/dashboard/users">All Users</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
