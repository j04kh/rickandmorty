import { useState } from "react";
import Wrapper from "../components/Wrapper";
import CharacterPreview from "../components/Characters/CharacterPreview";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../queries";
import { Character } from "../types/Character";
import Pagination from "../components/Pagination";

const Characters: React.FC = () => {
  const [page, setPage] = useState<number>(2);

  const { data, loading } = useQuery(GET_CHARACTERS, {
    variables: { page: page },
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
      <Pagination page={page} setPage={setPage} />
    </Wrapper>
  );
};

export default Characters;
