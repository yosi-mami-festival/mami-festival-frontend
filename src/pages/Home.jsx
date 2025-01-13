import { CLASSES } from "../paths";
import Classes from "./Classes";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  window.location.href = CLASSES;
  return <div />;
};

export default Home;
