import { useTodo } from "@/hooks";

const Todo = () => {
  const { data, isLoading, isError } = useTodo(10);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Oops! Something went wrong...</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default Todo;
