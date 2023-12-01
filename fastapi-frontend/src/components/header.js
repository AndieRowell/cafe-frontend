//_rfce - should work with es7 snippet extension

import Image from "next/image"; //next js image - compresses for you

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
      <div></div>

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
