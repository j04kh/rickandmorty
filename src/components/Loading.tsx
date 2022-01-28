import Wrapper from "./Wrapper";
import LoadingSpinner from "../assets/loading.png";

interface Props {
  title: string;
}

const Loading: React.FC<Props> = ({ title }) => {
  return (
    <Wrapper title={title}>
      <div className="h-full w-full flex items-center justify-center">
        <img
          src={LoadingSpinner}
          alt="Spinner"
          className="animate-spin mb-12 w-[55%] opacity-60"
        />
      </div>
    </Wrapper>
  );
};

export default Loading;
