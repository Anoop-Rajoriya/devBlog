import { createSlice } from "@reduxjs/toolkit";

type PostState = {
  title: string;
  content: string;
  tags: string[];
  image: string;
};

const initialState: PostState = {
  title: "",
  content: "",
  tags: [],
  image: "",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, action) => {
      const { title, content, tags, image } = action.payload;

      if (Object.hasOwn(action.payload, "title")) state.title = title;
      if (Object.hasOwn(action.payload, "content")) state.content = content;
      if (Object.hasOwn(action.payload, "image")) state.image = image;
      if (Object.hasOwn(action.payload, "tags")) state.tags = tags;
    },
    clearPost: (state) => {
      state.title = "";
      state.content = "";
      state.tags = [];
      state.image = "";
    },
  },
});

export const { setPost, clearPost } = postSlice.actions;
export default postSlice.reducer;
