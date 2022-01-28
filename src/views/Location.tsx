import { GET_LOCATION } from "../queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { Character } from "../types";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Wrapper from "../components/Wrapper";

const Location: React.FC = () => {
  const params = useParams();
  const { data, loading } = useQuery(GET_LOCATION, {
    variables: { id: params.id },
  });

  if (loading) {
    return <Loading title="Loading location..." />;
  }
  return (
    <Wrapper title="">
      <div className="w-full h-full mb-12 flex flex-col items-center text-center overflow-y-scroll">
        <h1 className="text-3xl mb-2">{`Location #${data.location.id}`}</h1>
        <h2 className="mt-4 text-2xl font-extralight">{data.location.name}</h2>
        <h2 className="mt-4">Type: </h2>
        <h2 className="font-light">{data.location.type}</h2>
        <h2 className="mt-4">Dimension: </h2>
        <h2 className="font-light">{data.location.dimension}</h2>

        <h2 className="mt-8">Residents:</h2>
        <ul className="w-full max-w-md h-[60%] mt-3 px-3 py-1 flex flex-col text-sm text-left bg-gray-800 rounded-md overflow-y-scroll">
          {data.location.residents.map((character: Character) => (
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

export default Location;
