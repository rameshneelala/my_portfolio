import { configureStore } from "@reduxjs/toolkit";
import ProjectsReducer from "./projectsSlice";

const appStore = configureStore({
  reducer: {
    projects: ProjectsReducer,
  },
});

export default appStore;
