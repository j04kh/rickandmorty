interface Props {
  name: string;
  episode: string;
}

const EpisodePreview: React.FC<Props> = ({ name, episode }) => {
  return (
    <li className="w-full h-8 my-1 px-4 bg-gray-900 bg-opacity-90 rounded-md flex items-center">
      <p className="truncate">
        {name} - <span className="text-sm text-gray-600">{episode}</span>
      </p>
    </li>
  );
};

export default EpisodePreview;
