interface Props {
  name: string;
  picture: string;
}

const CharacterPreview: React.FC<Props> = ({ name, picture }) => {
  return (
    <div className="w-full h-16 my-1 px-4 bg-gray-900 bg-opacity-90 rounded-md flex items-center">
      <img
        src={picture}
        alt="Character avatar"
        className="h-12 w-12 mr-3 rounded-full"
      />
      <h1 className="truncate">{name}</h1>
    </div>
  );
};

export default CharacterPreview;
