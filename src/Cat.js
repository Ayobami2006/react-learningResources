import { useGetCat } from "./useGetCat";

export const Cat = () => {
  const { data, refetchData, isLoading, error } = useGetCat();

  if (isLoading) {
    return <h2> Loading... </h2>;
  }

  if (error) {
    return <h2> Failed to laod data! 💥 </h2>;
  }

  return (
    <div>
      <button onClick={refetchData}> refetch </button>
      <h1>{data?.fact}</h1>
    </div>
  );
};
