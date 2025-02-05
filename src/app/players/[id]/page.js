import { db } from '@/utils/dbConnection';
import Image from 'next/image';

const SinglePlayerPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const { rows: player } = await db.query(
    `SELECT * FROM liverpool_legends WHERE id = $1`,
    [id]
  );
  console.log(player);
  return (
    <div className='h-[80vh]'>
      {player.map((legend) => (
        <div key={legend.id}>
          <p>{legend.name}</p>
          <Image src={legend.src} alt={legend.name} width={400} height={500} />
          <p>{legend.position}</p>
          <p>{'⭐'.repeat(legend.rating)}</p>
        </div>
      ))}
    </div>
  );
};

export default SinglePlayerPage;
