import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
  weight: '500',
});

export const metadata = {
  title: 'Liverpool Legends',
  description:
    'Some of the greatest legends to ever grace a Liverpool FC shirt',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppins.className}  antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
