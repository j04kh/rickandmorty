import Wrapper from "../components/Wrapper";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../queries";
import { Episode } from "../types/Character";

const Character: React.FC = () => {
  const params = useParams();

  const { data, loading } = useQuery(GET_CHARACTER, {
    variables: { id: params.id },
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
    <Wrapper title={`Character #${params.id}`}>
      <div className="w-full h-full mb-12 flex flex-col items-center text-center overflow-y-scroll">
        <img
          className="h-[30%] mb-5 rounded-full"
          src={data.character.image}
          alt="Character avatar"
        />
        <h1 className="text-2xl mb-2">{data.character.name}</h1>
        <h2>Status: {data.character.status}</h2>
        <h2>Gender: {data.character.gender}</h2>
        <h2 className="mt-2">Location:</h2>
        <p className="px-4 py-1 my-1 bg-teal-900 text-sm truncate rounded-md">
          {data.character.location.name}
        </p>
        <h2>Episodes:</h2>
        <ul className="w-full max-w-md h-[30%] mt-2 px-3 py-1 flex flex-col text-sm text-left bg-gray-800 rounded-md overflow-y-scroll">
          {data.character.episode.map((ep: Episode) => (
            <li key={ep.id}>
              <p className="truncate">{ep.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Character;