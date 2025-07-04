import Image from 'next/image';
import logo from '@/public/logo.png';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1 sm:gap-4 z-10">
      <Image
        src={logo}
        height={60}
        width={60}
        quality={100}
        alt="Wild Haven Cabins Logo"
      />
      <span className="text-xl text-center font-semibold text-primary-100">
        Wild Haven Cabins
      </span>
    </Link>
  );
}

export default Logo;
