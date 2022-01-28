import { useState } from "react";
import Wrapper from "../components/Wrapper";
import CharacterPreview from "../components/Characters/CharacterPreview";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../queries";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import type { Character } from "../types";

const Characters: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const { data, loading } = useQuery(GET_CHARACTERS, {
    variables: { page: page },
  });

  if (loading) {
    return <Loading title="Loading characters..." />;
  }
  return (
    <Wrapper title="Characters">
      <ul className="w-full h-[85%] overflow-y-scroll">
        {data.characters.results.map((character: Character) => (
          <Link to={`/characters/${character.id}`} key={character.id}>
            <CharacterPreview name={character.name} picture={character.image} />
          </Link>
        ))}
      </ul>
      <Pagination view="Characters" page={page} setPage={setPage} />
    </Wrapper>
  );
};

export default Characters;
