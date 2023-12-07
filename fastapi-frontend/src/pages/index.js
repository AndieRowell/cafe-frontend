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

export default function Home({ exploreData }) {
  const { state, dispatch } = useGlobalState();

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

        {/* section for */}
        <main className="max-w-7xl mx-auto px-8 sm:px-16">
          <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Where to Next?!</h2>

            {/* pull in data fom dummy data api - api endpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {exploreData?.map(({ id, img, name, city }) => (
                <MiniCard key={id} img={img} name={name} city={city} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-semi">Treat Yourself!</h2>
          </section>
        </main>
      </div>

      {/* main - className={`${styles.main}`} */}
      {/* className={styles.grid} */}

      {/* <main >
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

// for the dummy data api
export async function getStaticProps() {
  const res = await fetch(
    "https://api.mockaroo.com/api/93402ac0?count=7&key=d1803750"
  );
  const exploreData = await res.json();
  // const exploreData = await fetch("https://www.mockaroo.com/93402ac0");
  // then((res) => res.json());

  return {
    props: {
      exploreData,
      // exploreData: exploreData,
    },
  };
}
