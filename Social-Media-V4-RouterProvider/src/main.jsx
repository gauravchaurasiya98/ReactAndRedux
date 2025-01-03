import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App.jsx";
import CreatePost, { addPost } from "./components/CreatePost.jsx";
import Posts, { fetchPosts } from "./components/Posts.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route index element={<Posts />} loader={fetchPosts} />
//       <Route path="create-post" element={<CreatePost />} action={addPost} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Posts />,
        loader: fetchPosts,
      },
      {
        path: "create-post",
        element: <CreatePost />,
        action: addPost,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
