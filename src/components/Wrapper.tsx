interface Props {
  title: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="w-4/5 max-w-2xl h-2/3 mt-5 px-4 py-5 bg-gray-900 flex flex-col items-center bg-opacity-75 rounded-lg text-gray-100">
      <h1 className="text-lg">{title}</h1>
      <div className="mt-5 h-full w-full text-center flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
