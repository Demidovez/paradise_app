import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {IUser} from "../../types/types";

interface IUserState extends IUser {}

const initialState: IUserState = {
  id: "",
  first_name: "",
  last_name: "",
  parent_name: "",
  email: "",
  roles: [],
  avatar_color: "",
  image: "",
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await axios.get<IUser>(
    "http://192.168.100.103:8010/get_user/nikolaydemidovez@gmail.com",
  );

  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.id = action.payload.id;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.parent_name = action.payload.parent_name;
      state.email = action.payload.email;
      state.roles = action.payload.roles;
      state.avatar_color = action.payload.avatar_color;
      state.image = action.payload.image;
    },
  },
});

export default userSlice.reducer;
