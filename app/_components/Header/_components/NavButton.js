import { VscThreeBars } from 'react-icons/vsc';
import { IoReorderThree } from 'react-icons/io5';

function NavButton({ setIsOpen }) {
  return (
    <div onClick={() => setIsOpen(true)} className="flex md:hidden z-10">
      <IoReorderThree size={45} />
    </div>
  );
}

export default NavButton;
