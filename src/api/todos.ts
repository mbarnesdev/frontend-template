import { z } from 'zod';
import { client } from '@/api';

const todoSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});

export const fetchTodo = async (id: number) => {
  const response = await client.get(`/todos/${id}`);
  return todoSchema.parse(response.data);
};
