import { useState } from "react";
import Wrapper from "../components/Wrapper";
import CharacterPreview from "../components/Characters/CharacterPreview";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../queries";
import { Character } from "../types/Character";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

const Characters: React.FC = () => {
  const [page, setPage] = useState<number>(1);

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
          <Link to={`/characters/${character.id}`} key={character.id}>
            <CharacterPreview
              id={character.id}
              name={character.name}
              picture={character.image}
            />
          </Link>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </Wrapper>
  );
};

export default Characters;
