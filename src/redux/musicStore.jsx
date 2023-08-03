import { configureStore } from "@reduxjs/toolkit";

import musicsReducer from "./musicSlice/musicSlice";

export const store = configureStore({
  reducer: {
    musics: musicsReducer,
  },
});
