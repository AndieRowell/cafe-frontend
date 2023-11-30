//! main index page - landing page

// TODO:
// add hero
// navbar
// FIXME: i can add 'FIX me' situations here

"use client"; //? i think we need this here?

import React, { useState, useEffect } from "react";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";
import authService from "../services/auth.service";
import { jwtDecode } from "jwt-decode";
import styles from "../styles/home.module.css";
import Link from "next/link";
import Head from "next/head";
import Header from "@/components/header";

export default function Home() {
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
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Cafe Finder App</title>
          {/* icon link here - favicon */}
        </Head>
        <h1 className="text-red-500 text-5xl">Cafe Finder</h1>
        <Header />
      </div>



      <main className={`${styles.main}`}>
        <div className={styles.grid}>
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
      </main>
    </>
  );
}
