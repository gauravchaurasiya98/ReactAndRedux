import { createContext, useReducer } from "react";

export const PostsContext = createContext({
  posts: [],
  addPost: (post) => {},
  deletePost: (postId) => {},
  likePost: (postId) => {},
});

const ADD = "ADD";
const DELETE = "DELETE";
const LIKE = "LIKE";
var postIdGenerator = 0;

const DEFAULT_POSTS = [
  {
    id: ++postIdGenerator,
    title: "Learning Web Development",
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    hashtags: ["Developer", "Learning", "WebDevelopment"],
    likeCount: 98,
  },
  {
    id: ++postIdGenerator,
    title: "Learning React",
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    hashtags: ["Learning", "React", "ByKgCoding"],
    likeCount: 99,
  },
  {
    id: ++postIdGenerator,
    title: "Learning Advance React",
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    hashtags: ["advance", "react", "learning"],
    likeCount: 100,
  },
];

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
          post.likeCount += 1;
        }
        return post;
      });
      break;
    default:
      newPosts = currPosts;
  }
  return newPosts;
};

const PostsContextProvider = ({ children }) => {
  const [posts, dispatchPost] = useReducer(postsReducer, DEFAULT_POSTS);

  const addPost = (post) => {
    post.id = ++postIdGenerator;
    dispatchPost({
      type: ADD,
      payload: {
        post,
      },
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
    <PostsContext.Provider value={{ posts, addPost, deletePost, likePost }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
