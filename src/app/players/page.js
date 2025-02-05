import { db } from '@/utils/dbConnection';
import Link from 'next/link';

export const metadata = {
  title: 'A list of Liverpool Legends',
  description: 'A list of Liverpool legends',
};

const PlayersPage = async () => {
  const { rows: players } = await db.query(`SELECT * FROM liverpool_legends`);
  console.log(players);
  return (
    <div>
      <h3>Players Page</h3>
      <div className='h-[80vh]'>
        <ul>
          {players.map((player) => (
            <li key={player.id} className='m-3'>
              <Link
                href={`/players/${player.id}`}
                className='px-4 py-2 rounded-md hover:bg-sky-700'
              >
                {player.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlayersPage;
