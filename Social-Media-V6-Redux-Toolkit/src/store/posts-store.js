import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "./loading-slice";
import { tabReducer } from "./tab-slice";
import { postsReducer } from "./posts-slice";

const Store = configureStore({
  reducer: {
    loading: loadingReducer,
    selectedTab: tabReducer,
    posts: postsReducer,
  },
});

export default Store;
