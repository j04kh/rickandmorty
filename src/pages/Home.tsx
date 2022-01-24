import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Category from "../components/Home/Category";

const Home: React.FC = () => {
  return (
    <Wrapper title="Welcome to Rick's Garage 🧪 ">
      <Link to="/characters">
        <Category title="CHARACTERS" />
      </Link>
      <Category title="EPISODES" />
      <Category title="LOCATIONS" />
    </Wrapper>
  );
};

export default Home;
