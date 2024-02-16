import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <div className="row m-0 main-container">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Main;
