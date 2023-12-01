//_rfce - should work with es7 snippet extension

import Image from "next/image"; //next js image - compresses for you
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className="sticky top=0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5">
      {/* left div */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        {/* <h1>this is a header test</h1> */}
        <Image
          src="/assets/tempteacuplogo.svg"
          alt="temp logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
        
      </div>

      {/* middle div */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400" type="text" placeholder="Where to next?" />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-green-400 text-white rounded-full stroke-2 p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right div */}
      <div></div>
    </header>
  );
}

export default Header;

// TODO:
// left div
// middle div
// right div
