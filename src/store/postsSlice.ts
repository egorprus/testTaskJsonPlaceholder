import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost, PostsState } from "../models";

const initialState: PostsState = {
  posts: [],
  filteredPosts: [],
  currentPost: null,
  currentPage: 1,
  searchValue: "",
};

const postsSlice = createSlice({
  name: "postsSlice",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },
    setCurrentPost: (state, action: PayloadAction<IPost | null>) => {
      state.currentPost = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
      state.filteredPosts = state.posts.filter(
        (post) => post.title.indexOf(action.payload) >= 0
      );
    },
  },
});

export const { setPosts, setCurrentPost, setCurrentPage, setSearchValue } =
  postsSlice.actions;

export default postsSlice.reducer;
