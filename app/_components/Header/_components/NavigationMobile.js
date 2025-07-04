'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiHomeModern } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import { FaInfoCircle, FaUserCircle } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';

function NavigationMobile({ isOpen, setIsOpen }) {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;
  const spanClass = 'flex mt-[0.3rem] items-center text-lg sm:text-xl';

  return (
    <div
      className={`z-20 md:hidden flex text-xl fixed top-0 right-0 rounded-md h-full w-full transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-[1000px]'
      }`}
    >
      <div
        className="w-[40vw] h-full overflow-y-scroll"
        onClick={() => setIsOpen(false)}
      />
      <nav className="w-[60vw] bg-primary-900 h-full z-30 overflow-y-scroll">
        <div className="flex justify-between mt-3 mx-3 mb-4">
          <IoClose
            size={30}
            onClick={() => setIsOpen(false)}
            // className="ml-3 mt-3 mb-4"
          />

          <h1 className="font-bold mt-[0.1rem]">Menu</h1>
        </div>
        <ul className="mx-3 space-y-4 mt-5 pb-10">
          <li>
            <Link
              href="/"
              className={`flex gap-3 px-3 py-1 ${
                isActive('/') ? ' rounded-md bg-accent-50 text-primary-950' : ''
              }`}
            >
              <FaHome size={30} />
              <span className={`${spanClass}`}>Home</span>
            </Link>
          </li>

          <li>
            <Link
              href="/cabins"
              className={`flex gap-3 px-3 py-1  ${
                pathname.startsWith('/cabins')
                  ? ' rounded-md bg-accent-50 text-primary-950'
                  : ''
              }`}
            >
              <HiHomeModern size={30} />
              <span className={`${spanClass}`}>Cabins</span>
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className={`flex gap-3 px-3 py-1 ${
                isActive('/about')
                  ? ' rounded-md bg-accent-50 text-primary-950'
                  : ''
              }`}
            >
              <FaInfoCircle size={30} />
              <span className={`${spanClass}`}>About</span>
            </Link>
          </li>

          <li>
            <Link
              href="/account"
              className={`flex gap-3 px-3 py-1 ${
                isActive('/account')
                  ? ' rounded-md bg-accent-50 text-primary-950'
                  : ''
              }`}
            >
              <FaUserCircle size={30} />
              <span className={`${spanClass}`}>Guest Area</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationMobile;

// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { HiServer, HiAnnotation } from 'react-icons/hi';
// import { HiHomeModern } from 'react-icons/hi2';
// import { IoClose, IoSettings } from 'react-icons/io5';
// import { BiCalendar } from 'react-icons/bi';
// import { LuCalendarSearch } from 'react-icons/lu';
// import { FaInfoCircle, FaSearchDollar, FaUserCircle } from 'react-icons/fa';
// import { MdAddHome } from 'react-icons/md';
// import { FaHome } from 'react-icons/fa';

// function NavigationAdmin({ isOpen, setIsOpen }) {
//   const pathname = usePathname();

//   const isActive = (href) => pathname === href;

//   const spanClass = 'flex mt-[0.3rem] items-center text-lg sm:text-xl';

//   return (
//     <nav
//       className={`z-20 md:hidden overflow-y-scroll text-xl fixed top-0 right-0 bg-primary-900 rounded-md h-full w-[60vw] transform transition-transform duration-300 ease-in-out ${
//         isOpen ? 'translate-x-0' : 'translate-x-[1000px]'
//       }`}
//     >
//       <div className="flex justify-between mt-3 mx-3 mb-4">
//         <IoClose
//           size={30}
//           onClick={() => setIsOpen(false)}
//           // className="ml-3 mt-3 mb-4"
//         />

//         <h1 className="font-bold mt-[0.1rem]">Menu</h1>
//       </div>
//       <ul className="mx-3 space-y-4 mt-5 pb-10">
//         <li>
//           <Link
//             href="/"
//             className={`flex gap-3 px-3 py-1 ${
//               isActive('/') ? ' rounded-md bg-accent-50 text-primary-950' : ''
//             }`}
//           >
//             <FaHome size={30} />
//             <span className={`${spanClass}`}>Home</span>
//           </Link>
//         </li>

//         <li>
//           <Link
//             href="/cabins"
//             className={`flex gap-3 px-3 py-1  ${
//               pathname.startsWith('/cabins')
//                 ? ' rounded-md bg-accent-50 text-primary-950'
//                 : ''
//             }`}
//           >
//             <HiHomeModern size={30} />
//             <span className={`${spanClass}`}>Cabins</span>
//           </Link>
//         </li>

//         <li>
//           <Link
//             href="/about"
//             className={`flex gap-3 px-3 py-1 ${
//               isActive('/about')
//                 ? ' rounded-md bg-accent-50 text-primary-950'
//                 : ''
//             }`}
//           >
//             <FaInfoCircle size={30} />
//             <span className={`${spanClass}`}>About</span>
//           </Link>
//         </li>

//         <li>
//           <Link
//             href="/account"
//             className={`flex gap-3 px-3 py-1 ${
//               isActive('/account')
//                 ? ' rounded-md bg-accent-50 text-primary-950'
//                 : ''
//             }`}
//           >
//             <FaUserCircle size={30} />
//             <span className={`${spanClass}`}>Guest Area</span>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default NavigationAdmin;
