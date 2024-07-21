import { configureStore } from "@reduxjs/toolkit";
import vendorReducer from './reducers/vendorReducer'
import messageReducer from "./reducers/messageReducer";
import profileReducer from "./reducers/profileReducer";

export default configureStore({
  reducer: {
    vendor:vendorReducer,
    error:messageReducer,
    profile:profileReducer
  },
});