import { createSlice, current } from "@reduxjs/toolkit";

// id, title, description, imageUrl, link

const projects = [
  {
    id: 1,
    title: "Comfy Store",
    description: "It is a Ecommerce Website",
    link: "https://comfystoreram.netlify.app/",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "Check My projects",
    link: "https://portfoliorameshshiva.netlify.app/",
  },
];

const setProjectsInLocalStorage = localStorage.setItem(
  "projects",
  JSON.stringify(projects)
);
const getProjectsInLocalStorage = localStorage.getItem("projects");

const projectsSlice = createSlice({
  name: "project",
  initialState: {
    projectsList: JSON.parse(getProjectsInLocalStorage)
      ? JSON.parse(getProjectsInLocalStorage)
      : setProjectsInLocalStorage,

    // projectsList: projects,
    // projectsList: JSON.parse(localStorage.getItem("projects"))
    //   ? JSON.parse(localStorage.getItem("projects"))
    //   : projects,
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
