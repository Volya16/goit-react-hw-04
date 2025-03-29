import DotLoader from "react-spinners/DotLoader";

export default function Loader({ loading }) {
  return (
    <DotLoader
      color="#919292"
      loading={loading}
      cssOverride={{
        display: "block",
        margin: "0 auto",
      }}
      size={70}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
