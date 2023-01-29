import { useQuery } from '@tanstack/react-query';
import { fetchTodo } from '@/api/todos';

export const useTodo = (id: number) => {
  return useQuery(['fetch-todo'], () => fetchTodo(id));
};
