import { useState } from "react";
import { GET_LOCATIONS } from "../queries/getLocations";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Wrapper from "../components/Wrapper";
import Pagination from "../components/Pagination";
import LocationPreview from "../components/Locations/LocationPreview";
import type { Location } from "../types";

const Locations: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const { data, loading } = useQuery(GET_LOCATIONS, {
    variables: { page: page },
  });

  if (loading) {
    return <Loading title="Loading locations..." />;
  }

  return (
    <Wrapper title="Locations 🌎 ">
      <ul className="w-full h-[85%] overflow-y-scroll">
        {data.locations.results.map((location: Location) => (
          <Link to={`/locations/${location.id}`} key={location.id}>
            <LocationPreview name={location.name} />
          </Link>
        ))}
      </ul>
      <Pagination view="Locations" page={page} setPage={setPage} />
    </Wrapper>
  );
};

export default Locations;
