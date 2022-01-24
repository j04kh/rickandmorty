interface Props {
  title: string;
  url?: string;
}

const Category: React.FC<Props> = ({ title, url }) => {
  return (
    <div className="h-28 w-56 flex flex-col justify-center items-center bg-gray-900 bg-opacity-75 rounded-lg border-2 border-gray-600">
      <h2>{title}</h2>
    </div>
  );
};

export default Category;
