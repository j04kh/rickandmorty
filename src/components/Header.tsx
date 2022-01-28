import Logo from "../assets/rickandmortylogo.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="w-full h-12 bg-gray-900 bg-opacity-50 top-0 flex justify-center items-center fixed z-40">
      <Link to="/">
        <img src={Logo} alt="Logo" className="h-10" />
      </Link>
    </header>
  );
};

export default Header;
