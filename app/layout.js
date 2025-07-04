import { Josefin_Sans } from 'next/font/google';
import '@/app/globals.css';
import Header from './_components/Header/Header';
import ToasterContext from './_context/ToasterContext';
import LayoutWrapper from './_components/LayoutWrapper';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    template: '%s / Wild Haven Cabins',
    default: 'Welcome / Wild Haven Cabins',
  },
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-200 min-h-screen flex flex-col relative`}
      >
        <ToasterContext />
        <Header />
        <LayoutWrapper>{children}</LayoutWrapper>
        {/* <div className="px-2 sm:px-8 py-12"> */}
        {/* <main className="max-w-7xl mx-auto w-full">{children}</main> */}
        {/* </div> */}
      </body>
    </html>
  );
}
