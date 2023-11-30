//_rfce - should work with es7 snippet extension

import Image from "next/image"; //next js image - compresses for you

function Header() {
  return (
    <header>
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image />
      </div>
      <div></div>
      <div></div>
    </header>
  );
}

export default Header;

// TODO:
// left div
// middle div
// right div
