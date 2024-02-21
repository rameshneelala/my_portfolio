import Information from "../Information/Information";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Header from "../Header/Header";
import "./index.css";

const Home = () => {
  return (
    <div className="body-container">
      <Header />
      <Information />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
