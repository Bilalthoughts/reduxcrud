import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  blogData: [],
  loading: "idle",
};

const post_Url = "https://jsonplaceholder.typicode.com/posts";

export const fetchUsers = createAsyncThunk("blog/fetchUsers", async () => {
  const response = await axios.get(post_Url);
  return response.data;
});

export const addUsers = createAsyncThunk("blog/addUsers", async (payload) => {
  const response = await axios.post(post_Url, payload);
  return response.data;
});

export const editUsers = createAsyncThunk("blog/editUsers", async (payload) => {
  const response = await axios.put(`${post_Url}/${payload.id}`, payload);
  return response.data;
});

export const deleteUser = createAsyncThunk('blog/deleteUser', async (id) => {
  await axios.delete(`${post_Url}/${id}`);
  return id;
});


const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = "idle";
      state.blogData = action.payload;
    });
    builder.addCase(addUsers.fulfilled, (state, action) => {
      state.loading = "idle";
      state.blogData.unshift(action.payload);
    });
    builder.addCase(editUsers.fulfilled, (state, action)=>{
        state.loading = 'idle';
        state.blogData = state.blogData.filter((e)=> e.id !== action.payload.id)
        state.blogData = [action.payload, ...state.blogData]
    })
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = 'idle';
      const id = action.payload;
      state.blogData = state.blogData.filter((user) => user.id !== id);
    });
  },
});

export default blogSlice.reducer;

export const getdata = (state) => state.blog.blogData;
export const getloading = (state) => state.blog.loading;

export const getEditUser = ( id)=>{
    return(
        (state)=> state.blog.blogData.filter((e)=> e.id === id)[0]
        
    )
}
