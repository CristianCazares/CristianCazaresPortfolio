import PageLoader from "@/app/components/PageLoaders";

const Loading = () => {
  return (
    <div
      style={{
        height: "50vh",
        width: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <PageLoader />
    </div>
  );
};

export default Loading;
