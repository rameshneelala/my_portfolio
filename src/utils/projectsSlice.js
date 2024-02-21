import { createSlice, current } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "project",
  initialState: {
    projectsList: JSON.parse(localStorage.getItem("projects"))
      ? JSON.parse(localStorage.getItem("projects"))
      : [],
  },
  reducers: {
    addProject: (state, action) => {
      const newProject = action.payload;
      state.projectsList.push(newProject);
      let projectsData = JSON.stringify(current(state.projectsList));
      localStorage.setItem("projects", projectsData);
    },
    removeItem: (state, action) => {
      const newList = state.projectsList.filter(
        (pro) => pro.id !== action.payload
      );
      state.projectsList = newList;
      let newProjects = JSON.stringify(state.projectsList);
      localStorage.setItem("projects", newProjects);
    },
  },
});

export const { addProject, removeItem } = projectsSlice.actions;
export default projectsSlice.reducer;
