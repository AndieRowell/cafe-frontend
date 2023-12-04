//! registration page/form for anonymous users to become authenticated users

import React, { useEffect, useState } from "react";
import AuthService from "../services/auth.service";
import { useRouter } from "next/navigation";
import { useGlobalState } from "../context/GlobalState";
//import styles from '../styles/global.module.css';
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
//------------------------------------------------------------------------------------------------------------------------------
function RegisterPage() {
  const { state, dispatch } = useGlobalState();
  const router = useRouter();
  const [user, setUser] = useState({
    password: "",
    passwordConf: "",
    email: "",
    username: "",
  });
  //------------------------------------------------------------------------------------------------------------------------------
  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };
  //------------------------------------------------------------------------------------------------------------------------------
  async function handleRegister(e) {
    e.preventDefault();
    try {
      const resp = await AuthService.register(user);

      if (resp.data.access_token) {
        //let data = jwtDecode(resp.access_token);
        // resp.data.access_token resp.data.user_id
        let data = resp.data;
        await dispatch({
          type: "SET_USER",
          payload: data,
        });
        console.log("Login success");
        router.push("/");
      } else {
        console.log("Login failed");
        dispatch({ type: "LOGOUT_USER" });
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  }
  //------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="/assets/tempteacuplogo.svg"
          alt="temp app logo"
          href="/login"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:mx-w-sm">
        <form className="space-y-6" onSubmit={handleRegister}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insert focus:ring-green-600 sm:text-sm sm:leading-6"
                type="email"
                id="email"
                required
                onChange={(e) => {
                  let olduser = user;
                  olduser.email = e.target.value;
                  olduser.username = e.target.value;
                  setUser(olduser);
                }}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                type="password"
                id="password"
                name="password"
                required
                onChange={(e) => handleChange("password", e.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="passwordConf"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm password
            </label>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insert focus:ring-green-600 sm:text-sm sm:leading-6"
                type="password"
                id="passwordConf"
                required
                onChange={(e) => handleChange("passwordConf", e.target.value)}
              />
            </div>
          </div>
          <div>
            <input
              type="submit"
              value="Register!"
              className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              disabled={
                user.password &&
                user.password.length >= 8 &&
                user.password === user.passwordConf &&
                user.email
                  ? false
                  : true
              }
            />
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold leading-6 text-green-600 hover:text-green-500"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
