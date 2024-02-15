import { createStore } from "redux";

const IS_LOADED = "IS_LOADED";
const SELECTED_TAB = "SELECTED_TAB";
const ADD = "ADD";
const ADD_DEFAULT_POSTS = "ADD_DEFAULT_POSTS";
const DELETE = "DELETE";
const LIKE = "LIKE";

var postIdGenerator = 0;

const INITIAL_STATE = {
  isLoaded: false,
  selectedTab: "VIEW",
  posts: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  let newPosts;
  let { isLoaded, selectedTab, posts } = state;

  switch (action.type) {
    case ADD:
      let post = action.payload.post;
      post.id += postIdGenerator++;
      newPosts = [post, ...posts];
      break;
    case DELETE:
      newPosts = posts.filter((post) => post.id !== action.payload.postId);
      break;
    case LIKE:
      newPosts = posts.map((post) => {
        if (post.id === action.payload.postId) {
          post.reactions += 1;
        }
        return post;
      });
      break;
    case ADD_DEFAULT_POSTS:
      newPosts = action.payload.posts;
      break;
    case IS_LOADED:
      isLoaded = action.payload.isLoaded;
      newPosts = posts;
      break;
    case SELECTED_TAB:
      selectedTab = action.payload.selectedTab;
      newPosts = posts;
      break;
    default:
      newPosts = posts;
  }

  return { isLoaded, selectedTab, posts: newPosts };
};

const Store = createStore(reducer);

export default Store;
