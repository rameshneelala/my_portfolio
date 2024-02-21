import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../../utils/projectsSlice";
import { useNavigate } from "react-router-dom";
import { UNDERLINE } from "../../utils/constants";
import "./index.css";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [showError, setShowError] = useState(false);

  const title = useRef();
  const link = useRef();
  const description = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onProjectAdd = (e) => {
    e.preventDefault();
    if (
      title.current.value !== "" &&
      link.current.value !== "" &&
      description.current.value !== ""
    ) {
      console.log(title.current.value);
      dispatch(
        addProject({
          id: uuidv4(),
          title: title.current.value,
          link: link.current.value,
          description: description.current.value,
        })
      );
      navigate("/projects");
    } else {
      setShowError(true);
    }
  };
  return (
    <div className="form-container">
      <h1 className="form-title">Add Projects</h1>
      <img src={UNDERLINE} alt="underline" className="underline" />

      <div className="form-card">
        <form className="form" onSubmit={onProjectAdd}>
          <label htmlFor="PName" className="label">
            Project Name
          </label>
          <input id="PName" type="text" className="input" ref={title} />
          <label htmlFor="PLink" className="label">
            Project Link
          </label>
          <input id="PLink" type="text" className="input" ref={link} />
          <label htmlFor="PDescription" className="label">
            Description
          </label>
          <textarea
            id="PDescription"
            className="text-area"
            ref={description}
          ></textarea>
          {showError && <p className="error-message">Enter All Fields</p>}
          <button className="add-button">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
