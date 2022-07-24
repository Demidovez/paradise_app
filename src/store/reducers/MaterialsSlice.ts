import {createSlice} from "@reduxjs/toolkit";
import {IMaterialCategory} from "../../types/types";

interface IMaterialsState {
  categories: IMaterialCategory[];
}

const initialState: IMaterialsState = {
  categories: [],
};

export const materialsSlice = createSlice({
  name: "materials",
  initialState,
  reducers: {},
});

export default materialsSlice.reducer;
