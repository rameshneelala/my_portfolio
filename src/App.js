import "./App.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Root from "./components/Root/Root";

const App = () => {
  return (
    <Provider store={appStore}>
      <Root />
    </Provider>
  );
};

export default App;
