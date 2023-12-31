//! login page for authenticated user - if not anonymous should be able to redirect to registration

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import AuthService from "../services/auth.service";
import { jwtDecode } from "jwt-decode";
//import styles from '../styles/global.module.css';
import Link from "next/link";
import Image from "next/image";

//------------------------------------------------------------------------------------------------------------------------------
function LoginPage() {
  const router = useRouter();
  const { state, dispatch } = useGlobalState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //------------------------------------------------------------------------------------------------------------------------------
  const handleLogin = (e) => {
    e.preventDefault();
    const username = email;
    AuthService.login(username, password)
      .then(async (resp) => {
        if (resp != undefined) {
          if (resp.access_token) {
            //let data = jwtDecode(resp.access_token);
            let data = resp;
            // resp.access_token and resp.user_id
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
        }
      })
      .catch((error) => {
        // Handle the error here
        console.error("An error occurred:", error);
        // Optionally, dispatch a logout or error action
        dispatch({ type: "LOGOUT_USER" });
      })
      .finally(() => {
        // Code to run regardless of success or failure
        console.log("Login request completed");
      });
  };
  //------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        {/* <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"> */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <Link href="/"> */}
          <div onClick={() => router.push("/")}>
            <Image
              className="mx-auto"
              src="/assets/beanslogo-removebg.png"
              alt="temp app logo"
              width={50}
              height={50}
            />
          </div>
          {/* <img
            className="mx-auto h-10 w-auto"
            src="/assets/tempteacuplogo.svg"
            alt="temp app logo"
          /> */}
          {/* </Link> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:mx-w-sm">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insert focus:ring-yellow-800 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="pass"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-yellow-800 hover:text-yellow-800"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  id="pass"
                  name="password"
                  autoComplete="current-password"
                  minLength="8"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-800 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <input
                type="submit"
                value="Sign in"
                className="flex w-full justify-center rounded-md bg-yellow-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-800"
              />
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold leading-6 text-yellow-800 hover:text-yellow-800"
            >
              Sign up here
            </Link>
          </p>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default LoginPage;
