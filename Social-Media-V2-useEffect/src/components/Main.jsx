import { useState } from "react";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import PostsContextProvider from "../store/posts-context";

const Main = () => {
  const [selectedTab, setSelectedTab] = useState("VIEW");
  const handleSelectedTab = (tab) => setSelectedTab(tab);

  return (
    <PostsContextProvider>
      <div className="row m-0 main-container">
        <Sidebar
          selectedTab={selectedTab}
          handleSelectedTab={handleSelectedTab}
        />
        {selectedTab === "VIEW" ? <Posts /> : <CreatePost />}
      </div>
    </PostsContextProvider>
  );
};

export default Main;
