import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Category from "../components/Home/Category";

const Home: React.FC = () => {
  return (
    <Wrapper title="Welcome to Rick's Garage 🧪 ">
      <div className="h-full w-full flex flex-col items-center justify-evenly">
        <Link to="/characters">
          <Category title="CHARACTERS" />
        </Link>
        <Category title="EPISODES" />
        <Category title="LOCATIONS" />
      </div>
    </Wrapper>
  );
};

export default Home;
