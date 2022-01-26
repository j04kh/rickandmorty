interface Props {
  id: string;
  name: string;
}

const EpisodePreview: React.FC<Props> = ({ id, name }) => {
  return (
    <div className="w-full h-8 my-1 px-4 bg-gray-900 bg-opacity-90 rounded-md flex items-center">
      <p className="truncate">{name}</p>
    </div>
  );
};

export default EpisodePreview;
