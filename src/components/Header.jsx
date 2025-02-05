import Link from 'next/link';

const Header = () => {
  return (
    <header className='p-8 h-16 flex justify-between items-center'>
      <p>Liverpool Legends</p>
      <Link href='/players'>Players</Link>
    </header>
  );
};

export default Header;
