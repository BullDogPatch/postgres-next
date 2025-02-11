'use client';

import Link from 'next/link';

export default function Error({ error, reset }) {
  return (
    <>
      <h2>Something went wrong!</h2>
      <div className='flex'>
        <button onClick={() => reset()} className='m-4'>
          Try again
        </button>
        <Link href='/players' className='m-4'>
          Go back to players
        </Link>
      </div>
    </>
  );
}
