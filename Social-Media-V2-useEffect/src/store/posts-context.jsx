import { createContext, useEffect, useReducer, useState } from "react";

export const PostsContext = createContext({
  isLoaded: false,
  posts: [],
  addPost: (post) => {},
  deletePost: (postId) => {},
  likePost: (postId) => {},
});

const ADD = "ADD";
const ADD_DEFAULT_POSTS = "ADD_DEFAULT_POSTS";
const DELETE = "DELETE";
const LIKE = "LIKE";

var postIdGenerator = 0;

const postsReducer = (currPosts, action) => {
  let newPosts;
  switch (action.type) {
    case ADD:
      newPosts = [action.payload.post, ...currPosts];
      break;
    case DELETE:
      newPosts = currPosts.filter((post) => post.id !== action.payload.postId);
      break;
    case LIKE:
      newPosts = currPosts.map((post) => {
        if (post.id === action.payload.postId) {
          post.reactions += 1;
        }
        return post;
      });
      break;
    case ADD_DEFAULT_POSTS:
      newPosts = action.payload.posts;
      break;
    default:
      newPosts = currPosts;
  }
  return newPosts;
};

const PostsContextProvider = ({ children }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [posts, dispatchPost] = useReducer(postsReducer, []);

  useEffect(() => {
    console.log("Fetching posts...");
    const controller = new AbortController();
    fetch("https://dummyjson.com/posts", { signal: controller.signal })
      .then((res) => res.json())
      .then((json) => {
        initDefaultPosts(json.posts);
        setLoaded(true);
      });

    return () => {
      console.log("Aborting current request...");
      controller.abort();
      setLoaded(false);
    };
  }, []);

  const initDefaultPosts = (posts) => {
    dispatchPost({
      type: ADD_DEFAULT_POSTS,
      payload: {
        posts,
      },
    });
  };

  const addPost = (reqPost) => {
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqPost),
    })
      .then((res) => res.json())
      .then((post) => {
        post.id += postIdGenerator++;
        dispatchPost({
          type: ADD,
          payload: {
            post,
          },
        });
      });
  };

  const deletePost = (postId) => {
    dispatchPost({
      type: DELETE,
      payload: {
        postId,
      },
    });
  };

  const likePost = (postId) => {
    dispatchPost({
      type: LIKE,
      payload: {
        postId,
      },
    });
  };

  return (
    <PostsContext.Provider
      value={{ posts, addPost, deletePost, likePost, isLoaded }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
