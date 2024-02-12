import Post from "./Post";
import Spinner from "./Spinner";
import NoPostMessage from "./NoPostMessage";
import { useLoaderData, useNavigation } from "react-router-dom";

export const fetchPosts = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((json) => json.posts);
};

const Posts = () => {
  const posts = useLoaderData();
  const { state } = useNavigation();

  return (
    <>
      {state === "loading" ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <NoPostMessage />
      ) : (
        <div className="col-md-10 col-sm-10 row row-cols-1 row-cols-sm-2 row-cols-md-3 m-0 px-0 py-3">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;
