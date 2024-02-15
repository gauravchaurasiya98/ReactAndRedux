import Post from "./Post";
import Spinner from "./Spinner";
import NoPostMessage from "./NoPostMessage";
import { useDispatch, useSelector } from "react-redux";

const Posts = () => {
  const isLoaded = useSelector((store) => store.isLoaded);
  const posts = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  if (!isLoaded) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "ADD_DEFAULT_POSTS",
          payload: {
            posts: json.posts,
          },
        });
        dispatch({
          type: "IS_LOADED",
          payload: { isLoaded: true },
        });
      });
  }

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
