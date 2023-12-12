//! main index page - landing page

// "use client"; //? i think we need this here?

import React, { useState, useEffect } from "react";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/router";
import authService from "../services/auth.service";
import { jwtDecode } from "jwt-decode";
//import styles from "../styles/home.module.css";
import Link from "next/link";
import Head from "next/head";
import Header from "@/components/header";
import Hero from "@/components/hero";
import MiniCard from "@/components/minicard";
import MediumCard from "@/components/mediumcard";
import PromotionCard from "@/components/promotioncard";
import Footer from "@/components/footer";
import { drinksData } from "../../data/drinks";
import SplitHero from "@/components/splithero";

// import { exploreData } from "../../data/cafes";
// import { drinksData } from "../../data/drinks";

//!change to this code when have medium card data ready

export default function Home({ exploreData, drinksData }) {
  // export default function Home({ exploreData }) {
  const { state, dispatch } = useGlobalState();
  const { data, setData } = useState([]);

  useEffect(() => {
    const getUserFromLocalStorage = () => {
      const userData = localStorage.getItem("user");
      if (userData) {
        const user = jwtDecode(userData);
        console.log("User data:", user);
        dispatch({
          type: "SET_USER",
          payload: user,
        });
      }
    };
    getUserFromLocalStorage();
  }, []);

  const handleLogout = () => {
    authService.logout();
    dispatch({ type: "LOGOUT_USER" });
    router.push("/");
  };

  //!testing json local
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  //! here is where the original login nav link gets rendered? ...
  return (
    <>
      {/* <div className="flex flex-col items-center justify-center min-h-screen py-2"> */}
      <div className="">
        <Head>
          <title>Cafe Finder App</title>
          {/* icon link here - favicon */}
        </Head>
        {/* <h1 className="text-red-500 text-5xl">Cafe Finder</h1> */}
        <Header />
        <Hero />
        {/* <SplitHero /> */}
        {/* section for */}
        <main className="max-w-7xl mx-auto px-8 sm:px-16">
          <section className="pt-10">
            <h2 className="text-4xl font-semibold pb-2">In Your Area</h2>

            {/* pull in data fom dummy data api - api endpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {exploreData?.map(({ id, name, img, city }) => (
                <MiniCard key={id} name={name} img={img} city={city} />
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-4xl font-semibold pt-10 pb-8">
              Treat Yourself!
            </h2>
            {/* //! where the medium cards will go //! data passed here */}

            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
              {drinksData?.map(({ id, img, name }) => (
                <MediumCard key={id} img={img} name={name} />
              ))}
            </div>
          </section>
          {/* <section>
            {/* {data && data.length > 0 && data.map((item) => <p>{item.name}</p>)}
          </section> */}

          {/* //!need to add promotion card URL!!! */}
          <PromotionCard
            // img="url"
            title="Try Out Lexington Coffee Week!"
            description="A week of community and coffee lovers"
            buttonText="Let's see!"
          />
        </main>

        <Footer />
      </div>

      {/*

      //! this is where the logout/login link was previously - bp code
      <main >
        <div >
          {state.user ? (
            <li className="nav-item">
              <Link href="/" className={styles.logout} onClick={handleLogout}>
                Logout
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link href="/login">Login</Link>
            </li>
          )}
        </div>
      </main> */}
    </>
  );
}

// //! for the dummy data
// export async function getStaticProps() {
//   //! dummy data for businessses
//   // const res = await fetch(
//   //   "https://api.mockaroo.com/api/93402ac0?count=8&key=d1803750"
//   //   //! NOTE: change the "count=8" to number of items wanted to use in api
//   // );

//   const res = await fetch(
//     "/cafe-frontend/fastapi-frontend/data/cafes.json"
//     );

//     const exploreData = await res.json();

//   // const exploreData = await fetch("https://www.mockaroo.com/93402ac0");
//   // then((res) => res.json());

//   return {
//     props: {
//       exploreData,
//       // exploreData: exploreData,
//     },
//   };
// }

//! REPLACE WHEN dummy data set for drinks cards!
export async function getStaticProps() {
  //! businesses data
  const exploreData = await fetch(
    "https://api.mockaroo.com/api/93402ac0?count=16&key=d1803750"
  ).then((res) => res.json());

  //! drinks data
  const drinksData = await fetch(
    "https://api.mockaroo.com/api/9f193740?count=25&key=d1803750"
  ).then((res) => res.json());

  return {
    props: {
      exploreData,
      drinksData,
    },
  };
}
