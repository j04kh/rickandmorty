import { useQuery } from "@apollo/client";
import { GET_EPISODE } from "../queries";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import Wrapper from "../components/Wrapper";
import { Character } from "../types";
import { Link } from "react-router-dom";

const Episode: React.FC = () => {
  const params = useParams();
  const { data, loading } = useQuery(GET_EPISODE, {
    variables: { id: params.id },
  });

  if (loading) {
    return <Loading title="Loading episode..." />;
  }

  return (
    <Wrapper title="">
      <div className="w-full h-full mb-12 flex flex-col items-center text-center overflow-y-scroll">
        <h1 className="text-3xl mb-2">{`Episode #${data.episode.id}`}</h1>
        <h2 className="mt-4 text-2xl font-extralight">
          {data.episode.episode}:
        </h2>
        <h2>{data.episode.name}</h2>
        <h2 className="mt-4">Air date: </h2>
        <h2 className="font-light">{data.episode.air_date}</h2>
        <h2 className="mt-8">Characters on this episode:</h2>
        <ul className="w-full max-w-md h-[60%] mt-3 px-3 py-1 flex flex-col text-sm text-left bg-gray-800 bg-opacity-70 rounded-md overflow-y-scroll">
          {data.episode.characters.map((character: Character) => (
            <Link to={`/characters/${character.id}`} key={character.id}>
              <li>
                <p className="text-md">{character.name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <p className="mb-3 font-light text-sm text-gray-500">
        *Tap on characters names to see details
      </p>
    </Wrapper>
  );
};

export default Episode;
