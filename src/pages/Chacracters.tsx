import Wrapper from "../components/Wrapper";
import CharacterPreview from "../components/Characters/CharacterPreview";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../queries";
import { Character } from "../types/Character";

const Characters: React.FC = () => {
  const { data, loading } = useQuery(GET_CHARACTERS, {
    variables: { page: 1 },
  });

  if (loading) {
    return (
      <Wrapper title="Characters">
        <div className="w-full h-[85%] overflow-y-scroll">
          <h1>Loading...</h1>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper title="Characters">
      <div className="w-full h-[85%] overflow-y-scroll">
        {data.characters.results.map((character: Character) => (
          <CharacterPreview
            id={character.id}
            name={character.name}
            picture={character.image}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Characters;
