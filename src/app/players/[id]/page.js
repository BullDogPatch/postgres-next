import { db } from '@/utils/dbConnection';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const SinglePlayerPage = async ({ params }) => {
  const { id } = await params;

  const { rows: player } = await db.query(
    `SELECT * FROM liverpool_legends WHERE id = $1`,
    [id]
  );

  if (player.length === 0) {
    notFound();
  }

  return (
    <div className='h-[80vh] flex justify-center items-center'>
      {player.map((legend) => (
        <div key={legend.id} className='p-4 rounded-md border-2 border-red-700'>
          <p className='p-4 hover:underline'>{legend.name}</p>
          <Image
            src={legend.src}
            alt={legend.name}
            width={400}
            height={500}
            className='rounded-md m-4 border-2 border-red-700'
          />
          <p className='p-4'>{legend.position}</p>
          <p className='p-4 text-lg'>{'⭐'.repeat(legend.rating)}</p>
        </div>
      ))}
    </div>
  );
};

export default SinglePlayerPage;
