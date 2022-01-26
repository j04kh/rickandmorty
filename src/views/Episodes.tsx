import { useState } from "react";
import Wrapper from "../components/Wrapper";
import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../queries";
import { Episode } from "../types/Character";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import EpisodePreview from "../components/Episodes/EpisodePreview";
import Loading from "../components/Loading";

const Episodes: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const { data, loading } = useQuery(GET_EPISODES, {
    variables: { page: page },
  });

  if (loading) {
    return <Loading title="Episodes" />;
  }

  return (
    <Wrapper title="Episodes 📺">
      <div className="w-full h-[85%] overflow-y-scroll">
        {data.episodes.results.map((episode: Episode) => (
          <Link to={`/episodes/${episode.id}`} key={episode.id}>
            <EpisodePreview id={episode.id} name={episode.name} />
          </Link>
        ))}
      </div>
      <Pagination view="Episodes" page={page} setPage={setPage} />
    </Wrapper>
  );
};

export default Episodes;
