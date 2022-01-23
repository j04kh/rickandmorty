import Logo from "../assets/rickandmortylogo.png";

const Header: React.FC = () => {
  return (
    <header className="w-full h-16 bg-gray-900 bg-opacity-50 top-0 flex justify-center items-center fixed z-40">
      <img src={Logo} alt="Logo" className="h-12" />
    </header>
  );
};

export default Header;
