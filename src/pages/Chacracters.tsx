import Wrapper from "../components/Wrapper";
import CharacterPreview from "../components/Characters/CharacterPreview";

const Characters: React.FC = () => {
  return (
    <Wrapper title="Characters">
      <div className="w-full h-[85%] overflow-y-scroll">
        <CharacterPreview id="1" name="Rick Sanchez" picture="" />
      </div>
    </Wrapper>
  );
};

export default Characters;
