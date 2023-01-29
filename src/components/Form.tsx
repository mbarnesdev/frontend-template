import { useZodForm } from '@/hooks';
import { z } from 'zod';

const FormSchema = z.object({ value: z.string().regex(/^\d+$/) });

const Form = () => {
  const { register, handleSubmit } = useZodForm({ schema: FormSchema });

  return (
    <form onSubmit={handleSubmit((data) => alert(data.value))}>
      <input type="text" required {...register('value')} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
