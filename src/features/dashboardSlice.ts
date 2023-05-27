import { Dashboard } from './../pages/Dashboard/Dashboard';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP_STATUS } from "../app/constants";
import axios from "axios";



interface InitialStateInter {
    data : null | [],
    loading : null | string,

}


export const fetchDashboardDate = createAsyncThunk(
  "dashboard/fetchDashboardDate",
  async () => {
    const response = await axios
      .get("https://dummyjson.com/users")
      .then((res) => res.data.users);
      console.log(response)
    return response;
  }
);

const initialState: InitialStateInter = {
    data: null,
    loading: null,
  }

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(fetchDashboardDate.pending,(state)=>{
        state.loading = HTTP_STATUS.PENDING
    }),
    builder.addCase(fetchDashboardDate.fulfilled,(state,action)=>{
        state.loading = HTTP_STATUS.FULFILLED
        state.data = action.payload
    }),
    builder.addCase(fetchDashboardDate.rejected,(state)=>{
        state.loading = HTTP_STATUS.REJECTED
    })
  },
});

 export const userSelector = (state: any) => state.dashboard
export default dashboardSlice.reducer;
