import {createSlice} from "@reduxjs/toolkit";

interface ISettingsState {
  theme: {
    colors: {
      selected: string;
      unselected: string;
    };
  };
}

const initialState: ISettingsState = {
  theme: {
    colors: {
      selected: "#000000",
      unselected: "#AEAEAE",
    },
  },
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
});

export default settingsSlice.reducer;
