interface Props {
  title: string;
  url?: string;
}

const Category: React.FC<Props> = ({ title, url }) => {
  return (
    <div className="h-20 w-56 flex flex-col justify-center items-center bg-gray-900 bg-opacity-60 rounded-lg border-2 border-cyan-900">
      <h2>{title}</h2>
    </div>
  );
};

export default Category;
