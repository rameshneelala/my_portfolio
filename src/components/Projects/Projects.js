import { useSelector } from "react-redux";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./index.css";
import Header from "../Header/Header";
import { UNDERLINE } from "../../utils/constants";
import SocialIcons from "../SocialIcons/SocialIcons";
import Footer from "../Footer/Footer";

const Projects = () => {
  const projectsList = useSelector((store) => store.projects.projectsList);

  // useEffect(() => {
  //   const projects = [
  //     {
  //       id: 1,
  //       title: "Comfy Store",
  //       description: "It is a Ecommerce Website",
  //       link: "https://comfystoreram.netlify.app/",
  //     },
  //     {
  //       id: 2,
  //       title: "Personal Portfolio",
  //       description: "Check My projects",
  //       link: "https://portfoliorameshshiva.netlify.app/",
  //     },
  //   ];
  //   localStorage.setItem("projects", JSON.stringify(projects));
  // }, []);

  return (
    <div className="pp-container">
      <Header />
      <div className="pp-header">
        <h2 className="pp-heading">Projects</h2>
        <img src={UNDERLINE} alt="underline" className="underline" />
      </div>
      <div className="pp-list">
        {projectsList.map((each, index) => (
          <ProjectCard data={each} key={index} />
        ))}
      </div>
      <SocialIcons />
      <Footer />
    </div>
  );
};

export default Projects;
