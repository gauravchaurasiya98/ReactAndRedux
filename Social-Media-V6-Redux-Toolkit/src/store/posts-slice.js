import { createSlice } from "@reduxjs/toolkit";

var postIdGenerator = 0;

const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    initDefaultPosts: (state, action) => {
      return action.payload.map((post) => {
        return { ...post, reactions: post.reactions.likes };
      });
    },
    addPost: (state, action) => {
      let post = action.payload;
      post.id += postIdGenerator++;
      state.unshift(post);
    },
    deletePost: (state, action) => {
      const indexToDelete = state.findIndex(
        (post) => post.id === action.payload
      );
      if (indexToDelete > -1) {
        state.splice(indexToDelete, 1);
      }
    },
    likePost: (state, action) => {
      const post = state.find((post) => post.id === action.payload);
      if (post) {
        post.reactions += 1;
      }
    },
  },
});

export const postsActions = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
