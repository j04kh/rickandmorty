interface Props {
  title: string;
  image: string;
  url?: string;
}

const Category: React.FC<Props> = ({ title, image, url }) => {
  return (
    <div className="h-28 flex flex-col items-center bg-gray-900">
      <img className="h-full" src={image} alt={image} />
      <h2>{title}</h2>
    </div>
  );
};

export default Category;
