import Category from "./Category";
import Characters from "./assets/characters.jpg";
import Episodes from "./assets/episodes.jpg";
import Locations from "./assets/locations.jpg";

const Modal: React.FC = () => {
  return (
    <div className="w-4/5 max-w-2xl h-2/3 mt-5 px-4 py-5 bg-gray-900 flex flex-col items-center bg-opacity-75 rounded-lg text-gray-100">
      <h1 className="text-lg">Welcome to Rick's garage 🧪 </h1>
      <div className="mt-5 h-full w-full text-center flex flex-col items-center justify-evenly">
        <Category title="CHARACTERS" image={Characters} />
        <Category title="EPISODES" image={Episodes} />
        <Category title="LOCATIONS" image={Locations} />
      </div>
    </div>
  );
};

export default Modal;
