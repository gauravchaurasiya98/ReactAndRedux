import { Outlet } from "react-router-dom";
import { useState } from "react";

import PostsContextProvider from "../store/posts-context";
import Sidebar from "./Sidebar";

const Main = () => {
  const [selectedTab, setSelectedTab] = useState("VIEW");

  return (
    <PostsContextProvider>
      <div className="row m-0 main-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <Outlet context={setSelectedTab} />
      </div>
    </PostsContextProvider>
  );
};

export default Main;
