import { db } from '@/utils/dbConnection';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const PostPlayerForm = () => {
  const handleSubmit = async (formData) => {
    'use server';
    const name = formData.get('name');
    const src = formData.get('src');
    const rating = formData.get('rating');
    const position = formData.get('position');

    await db.query(
      `INSERT INTO liverpool_legends (name, src, rating, position) VALUES ($1, $2, $3, $4)`,
      [name, src, rating, position]
    );
    revalidatePath('/players');
    redirect('/players');
  };
  return (
    <form action={handleSubmit}>
      <label htmlFor='name'>Name: </label>
      <input type='text' name='name' id='name' />
      <label htmlFor='src'>Image: </label>
      <input type='text' name='src' id='src' />
      <label htmlFor='rating'>Rating: </label>
      <input type='number' name='rating' id='rating' />
      <label htmlFor='position'>Postition: </label>
      <input type='text' name='position' id='position' />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default PostPlayerForm;
