//rfce - should work with es7 snippet extension

import Image from "next/image"; //next js image - compresses for you
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  Bars3Icon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { useGlobalState } from "@/context/GlobalState";
import Link from "next/link";
import { useState } from "react";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { useRouter } from "next/router";



// passing in placeholder props
function Header({placeholder}) {
    //! state for user login
    const { state, dispatch } = useGlobalState();

    //! search state
    const [searchInput, setSearchInput] = useState('');
    // console.log(searchInput);

    //! clear searchinput state - cancel
    const resetInput = () => {
      setSearchInput("");
    };

    //! search action! - redirect and query parameters
    // could do more defensive programming for type of input and could also add day and time
    const search = () => {
      router.push({
        pathname: '/searchresult',
        query: {
          city: searchInput
        }
      });
    };

    //! page routing - allows us to redirect user
    const router = useRouter();


    return (
    <header className="sticky top=0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5">
      {/* left div */}
      <div onClick={() => router.push('/') } className="relative flex items-center h-20 cursor-pointer my-auto">
        {/* <h1>this is a header test</h1> */}
        {/* <Link href="/"> */}
        <Image
          // src="/assets/tempteacuplogo.svg"
          src="/assets/beanslogo-removebg.png"
          alt="temp logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
        {/* </Link> */}
      </div>

{/* //! the search bar is here! */}
      {/* middle div */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          value={searchInput} //value that gets taken in from the search input
          onChange={(e) => setSearchInput(e.target.value)} //event for when user changes the value in the search input (maps to search input)
          className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Where to next?"}
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-yellow-800 text-white rounded-full stroke-2 p-2 cursor-pointer md:mx-2" />
      </div>


      {/* right div */}
      <div className="flex items-center space-x-4 text-gray-500 justify-end ">
        {/* <p className="hidden md:inline cursor-pointer">Sign In</p> */}
          {state.user ? (
              <Link href="/" className={styles.logout} onClick={handleLogout}>
                Logout
              </Link>
          ) : (
              <Link href="/login" className="hidden md:inline cursor-pointer">Sign In</Link>
          )}
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

{/* //! dropdown for search?
      //if searchinput has a value then render this */}
      {searchInput && (

        <div className="flex flex-col col-span-3 mx-auto">
          <div className="flex justify-between">
          <button onClick={resetInput} className="flex-grow text-gray-500">
            Cancel
          </button>
          <button onClick={search} className="flex-grow text-yellow-800">
            Search
          </button>
          </div>
        </div>

      )}

    </header>
  );
}

export default Header;
