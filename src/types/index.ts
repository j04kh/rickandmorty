export type Character = {
  id: string;
  name: string;
  status: string;
  type: string;
  gender: string;
  image: string;
  location: Location;
  episodes: Episode[];
};

export type Location = {
  id: string;
  name: string;
  dimension: string;
  residents: Character[];
};

export type Episode = {
  id: string;
  name: string;
  episode: string;
};
