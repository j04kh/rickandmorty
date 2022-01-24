interface Props {
  id: string;
  name: string;
  picture: string;
}

const CharacterPreview: React.FC<Props> = ({ id, name, picture }) => {
  return (
    <div className="w-full h-16 my-1 px-4 bg-gray-900 bg-opacity-90 rounded-md flex items-center">
      <div className="h-12 w-12 mr-3 rounded-full bg-gray-800" />
      <h1>{name}</h1>
    </div>
  );
};

export default CharacterPreview;
