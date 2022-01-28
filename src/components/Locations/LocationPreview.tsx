interface Props {
  name: string;
}

const LocationPreview: React.FC<Props> = ({ name }) => {
  return (
    <li className="w-full h-8 my-1 px-4 bg-gray-900 bg-opacity-90 rounded-md flex items-center">
      <p className="truncate">{name}</p>
    </li>
  );
};

export default LocationPreview;
