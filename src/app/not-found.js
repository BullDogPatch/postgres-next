import Link from 'next/link';

export default async function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p className='m-4'>Could not find requested resource</p>
      <p>
        <Link href='/players' className='p-3 bg-red-900 rounded-md'>
          all players
        </Link>
      </p>
    </div>
  );
}
