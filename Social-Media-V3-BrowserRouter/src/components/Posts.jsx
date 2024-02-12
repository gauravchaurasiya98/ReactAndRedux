import { useContext } from "react";
import { PostsContext } from "../store/posts-context";

import Post from "./Post";
import Spinner from "./Spinner";
import NoPostMessage from "./NoPostMessage";

const Posts = () => {
  const { isLoaded, posts } = useContext(PostsContext);

  return (
    <>
      {!isLoaded ? (
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
