import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { useRouter } from "next/router";
import { func } from "prop-types";
import ResultCard from "@/components/resultcard";
import MapBox from "@/components/mapbox";

//destructure props in here to searchResults
function SearchResult({ searchResults }) {
  const router = useRouter();

  const { city } = router.query;

  return (
    <div>
      <Header placeholder={city} />
      {/* //string interpolation to put in user values - "|"" to separate */}
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            this will be the search input the user entered
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Cafe's in {city}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {/* //! filters! and TAGS! */}
            <p className="button">Coffee</p>
            <p className="button">Matcha</p>
            <p className="button">Tea</p>
            <p className="button">Good Wifi</p>
            <p className="button">Wheelchair Accessible</p>
            <p className="button">Cozy</p>
          </div>

          {/* //! this is where i need to map the search results with the json i create */}
          <div className="flex flex-col">
            {/* //use map to go through an array and render on screen
    //destructuring props again instead of item and item.id etc */}
            {/* {searchResults?.data?.map( */}
            {searchResults?.map(({ id, img, city, name, rating, tags }) => (
              <ResultCard
                key={id}
                name={name}
                img={img}
                city={city}
                rating={rating}
                tags={tags}
              />
            ))}
          </div>
        </section>
        {/* //! MAP FROM MAPBOX */}
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <MapBox searchResults={searchResults}/>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SearchResult;

// !ADD BUSINESSES API URL HERE
//can add context object that calls to those previous query parameters

//only want the json response object for this scenario
//wait for it - parse it - results come through
//when you use await have to have async
// ! reconnect this for BUSINESS CARDS RESULTS
export async function getServerSideProps() {
  const searchResults = await fetch(
    "https://api.mockaroo.com/api/93402ac0?count=15&key=d1803750"
  ).then((res) => res.json());

  //pass it back to the page with props
  return {
    props: {
      searchResults,
    },
  };
}
