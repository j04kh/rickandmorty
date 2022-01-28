import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Category from "../components/Home/Category";
import Rick from "../assets/rick.png";

const Home: React.FC = () => {
  return (
    <Wrapper title="">
      <div className="flex items-center">
        <img src={Rick} alt="Rick avatar" className="w-1/2 max-h-48" />
        <h1 className="text-left text-xl">
          Hi stranger, <br /> Welcome to my garage!
        </h1>
      </div>
      <div className="h-full w-full flex flex-col items-center justify-evenly">
        <Link to="/characters">
          <Category title="CHARACTERS" />
        </Link>
        <Link to="/episodes">
          <Category title="EPISODES" />
        </Link>
        <Link to="/locations">
          <Category title="LOCATIONS" />
        </Link>
      </div>
    </Wrapper>
  );
};

export default Home;
