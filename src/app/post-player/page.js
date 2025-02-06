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
    <div className='flex justify-center items-center min-h-screen'>
      <form action={handleSubmit} className='p-4 w-80'>
        <label className='block mb-1' htmlFor='name'>
          Name:
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='text-slate-800 w-full p-2 mb-3 border rounded'
        />

        <label className='block mb-1' htmlFor='src'>
          Image URL:
        </label>
        <input
          type='text'
          name='src'
          id='src'
          className='text-slate-800 w-full p-2 mb-3 border rounded'
        />

        <label className='block mb-1' htmlFor='rating'>
          Rating:
        </label>
        <input
          type='number'
          name='rating'
          id='rating'
          min='1'
          max='10'
          className='text-slate-800 w-full p-2 mb-3 border rounded'
        />

        <label className='block mb-1' htmlFor='position'>
          Position:
        </label>
        <input
          type='text'
          name='position'
          id='position'
          className='text-slate-800 w-full p-2 mb-3 border rounded'
        />

        <button
          type='submit'
          className='w-full bg-gray-300 py-2 rounded hover:bg-gray-400'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostPlayerForm;
