import Loading from "./Loading";

const SuspenseFallback: React.FC = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <Loading title="Loading the scene..." />
    </div>
  );
};

export default SuspenseFallback;
