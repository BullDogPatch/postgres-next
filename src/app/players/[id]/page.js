import { db } from '@/utils/dbConnection';

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
          <img src={legend.src} alt={legend.name} className='w-[350px]' />
          <p>{legend.position}</p>
          <p>{'⭐'.repeat(legend.rating)}</p>
        </div>
      ))}
    </div>
  );
};

export default SinglePlayerPage;
