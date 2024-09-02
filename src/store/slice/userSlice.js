import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch data
export const fetchData = createAsyncThunk("fetchApi", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  console.log(response.data);
  return response.data;
});

const CardSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    removePost(state, action) {
      state.data = state.data.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the updatePost action
export const { removePost } = CardSlice.actions;

export default CardSlice.reducer;