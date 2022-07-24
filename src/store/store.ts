import {configureStore} from "@reduxjs/toolkit";
import {materialsAPI} from "./api/MaterialsService";
import settingsReducer from "./reducers/SettingsSlice";
import userReducer from "./reducers/UserSlice";

export const store = configureStore({
  reducer: {
    settingsReducer,
    userReducer,
    [materialsAPI.reducerPath]: materialsAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(materialsAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
