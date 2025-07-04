'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiServer, HiAnnotation } from 'react-icons/hi';
import { HiHomeModern } from 'react-icons/hi2';
import { IoClose, IoSettings } from 'react-icons/io5';
import { BiCalendar } from 'react-icons/bi';
import { LuCalendarSearch } from 'react-icons/lu';
import { FaSearchDollar } from 'react-icons/fa';
import { MdAddHome } from 'react-icons/md';

function NavigationAdmin({ isOpen, setIsOpen }) {
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  const spanClass = 'flex mt-1.5 items-center text-xl md:text-lg lg:text-xl';

  return (
    <div
      className={`z-20 md:hidden flex text-xl fixed top-0 right-0 rounded-md h-full w-full transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-[1000px]'
      }`}
    >
      <div
        className="w-[30vw] h-full overflow-y-scroll"
        onClick={() => setIsOpen(false)}
      />
      <nav className="w-[70vw] bg-primary-900 h-full z-30 overflow-y-scroll">
        <div className="flex justify-between mt-3 mx-3 mb-4">
          <IoClose
            size={30}
            onClick={() => setIsOpen(false)}
            // className="ml-3 mt-3 mb-4"
          />

          <h1 className="font-bold mt-[0.1rem]">Menu</h1>
        </div>
        <ul className="mx-3 space-y-8 mt-5 pb-10">
          <li>
            <Link
              href="/adminPanel/dashboard"
              className={`flex gap-3 px-3 py-1 ${
                [
                  '/adminPanel/dashboard',
                  '/adminPanel/dashboard/lastThirtyDays',
                  '/adminPanel/dashboard/lastSixtyDays',
                ].includes(pathname)
                  ? ' rounded-md bg-accent-50 text-primary-950'
                  : ''
              }`}
            >
              <HiServer size={35} />
              <span className={`${spanClass}`}>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              href="/adminPanel/bookings"
              className={`flex gap-3 px-3 py-1  ${
                [
                  '/adminPanel/bookings',
                  '/adminPanel/bookings/checkedIn',
                ].includes(pathname)
                  ? ' rounded-md bg-accent-50 text-primary-950'
                  : ''
              }`}
            >
              <BiCalendar size={30} />
              <span className={`${spanClass}`}>Bookings</span>
            </Link>
          </li>

          <li>
            <Link
              href="/adminPanel/searchBooking"
              className={`flex gap-3 px-3 py-1 items-center ${
                isActive('/adminPanel/searchBooking')
                  ? ' rounded-md bg-accent-50 text-primary-950'
                  : ''
              }`}
            >
              <LuCalendarSearch size={30} />
              <span className={`${spanClass}`}>Search Booking</span>
            </Link>
          </li>

          <li>
            <Link
              href="/adminPanel/searchPayment"
              className={`flex gap-3 px-3 py-1 items-center ${
                isActive('/adminPanel/searchPayment')
                  ? ' rounded-md bg-accent-50 text-primary-950'
                  : ''
              }`}
            >
              <FaSearchDollar size={30} />
              <span className={`${spanClass}`}>Search Payment</span>
            </Link>
          </li>

          <li>
            <Link
              href="/adminPanel/cabins"
              className={`flex gap-3 px-3 py-1 ${
                isActive('/adminPanel/cabins')
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
              href="/adminPanel/createCabin"
              className={`flex gap-3 px-3 py-1 items-center ${
                isActive('/adminPanel/createCabin')
                  ? ' rounded-md bg-accent-50 text-primary-950'
                  : ''
              }`}
            >
              <MdAddHome size={30} />
              <span className={`${spanClass}`}>Create Cabin</span>
            </Link>
          </li>

          <li>
            <Link
              href="/adminPanel/settings"
              className={`flex gap-3 px-3 py-1 ${
                isActive('/adminPanel/settings')
                  ? ' rounded-md bg-accent-50 text-primary-950 md:text-lg lg:text-xl'
                  : ''
              }`}
            >
              <IoSettings size={30} />
              <span className={`${spanClass}`}>Settings</span>
            </Link>
          </li>

          <li>
            <Link
              href="/adminPanel/userQueries"
              className={`flex gap-3 px-3 py-1 items-center ${
                isActive('/adminPanel/userQueries')
                  ? ' rounded-md bg-accent-50 text-primary-950'
                  : ''
              }`}
            >
              <HiAnnotation size={30} />
              <span className={`${spanClass}`}>User Queries</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationAdmin;
// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { HiServer, HiAnnotation } from 'react-icons/hi';
// import { HiHomeModern } from 'react-icons/hi2';
// import { IoClose, IoSettings } from 'react-icons/io5';
// import { BiCalendar } from 'react-icons/bi';
// import { LuCalendarSearch } from 'react-icons/lu';
// import { FaSearchDollar } from 'react-icons/fa';
// import { MdAddHome } from 'react-icons/md';

// function NavigationAdmin({ isOpen, setIsOpen }) {
//   const pathname = usePathname();

//   const isActive = (href) => pathname === href;

//   const spanClass = 'flex mt-1.5 items-center text-xl md:text-lg lg:text-xl';

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
//       <ul className="mx-3 space-y-8 mt-5 pb-10">
//         <li>
//           <Link
//             href="/adminPanel/dashboard"
//             className={`flex gap-3 px-3 py-1 ${
//               [
//                 '/adminPanel/dashboard',
//                 '/adminPanel/dashboard/lastThirtyDays',
//                 '/adminPanel/dashboard/lastSixtyDays',
//               ].includes(pathname)
//                 ? ' rounded-md bg-accent-50 text-primary-950'
//                 : ''
//             }`}
//           >
//             <HiServer size={35} />
//             <span className={`${spanClass}`}>Dashboard</span>
//           </Link>
//         </li>

//         <li>
//           <Link
//             href="/adminPanel/bookings"
//             className={`flex gap-3 px-3 py-1  ${
//               [
//                 '/adminPanel/bookings',
//                 '/adminPanel/bookings/checkedIn',
//               ].includes(pathname)
//                 ? ' rounded-md bg-accent-50 text-primary-950'
//                 : ''
//             }`}
//           >
//             <BiCalendar size={30} />
//             <span className={`${spanClass}`}>Bookings</span>
//           </Link>
//         </li>

//         <li>
//           <Link
//             href="/adminPanel/searchBooking"
//             className={`flex gap-3 px-3 py-1 ${
//               isActive('/adminPanel/searchBooking')
//                 ? ' rounded-md bg-accent-50 text-primary-950'
//                 : ''
//             }`}
//           >
//             <LuCalendarSearch size={30} />
//             <span className={`${spanClass}`}>Search Booking</span>
//           </Link>
//         </li>

//         <li>
//           <Link
//             href="/adminPanel/searchPayment"
//             className={`flex gap-3 px-3 py-1 ${
//               isActive('/adminPanel/searchPayment')
//                 ? ' rounded-md bg-accent-50 text-primary-950'
//                 : ''
//             }`}
//           >
//             <FaSearchDollar size={30} />
//             <span className={`${spanClass}`}>Search Payment</span>
//           </Link>
//         </li>

//         <li>
//           <Link
//             href="/adminPanel/cabins"
//             className={`flex gap-3 px-3 py-1 ${
//               isActive('/adminPanel/cabins')
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
//             href="/adminPanel/createCabin"
//             className={`flex gap-3 px-3 py-1 ${
//               isActive('/adminPanel/createCabin')
//                 ? ' rounded-md bg-accent-50 text-primary-950'
//                 : ''
//             }`}
//           >
//             <MdAddHome size={30} />
//             <span className={`${spanClass}`}>Create Cabin</span>
//           </Link>
//         </li>

//         <li>
//           <Link
//             href="/adminPanel/settings"
//             className={`flex gap-3 px-3 py-1 ${
//               isActive('/adminPanel/settings')
//                 ? ' rounded-md bg-accent-50 text-primary-950 md:text-lg lg:text-xl'
//                 : ''
//             }`}
//           >
//             <IoSettings size={30} />
//             <span className={`${spanClass}`}>Settings</span>
//           </Link>
//         </li>

//         <li>
//           <Link
//             href="/adminPanel/userQueries"
//             className={`flex gap-3 px-3 py-1 ${
//               isActive('/adminPanel/userQueries')
//                 ? ' rounded-md bg-accent-50 text-primary-950'
//                 : ''
//             }`}
//           >
//             <HiAnnotation size={30} />
//             <span className={`${spanClass}`}>User Queries</span>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default NavigationAdmin;
