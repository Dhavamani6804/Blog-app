import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function signup() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl flex-col md:flex-row md:items-center gap-5 mx-auto">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className=" text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 rounded-lg text-white">
              Dhava's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is my blog where you can catch up all my new ideas
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                required={true}
                className="mb-3"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <TextInput
                type="text"
                placeholder="user@mail.com"
                id="email"
                required={true}
                className="mb-3"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <TextInput
                type="text"
                placeholder="********"
                id="password"
                required={true}
                className="mb-3"
              />
            </div>
            <Button gradientDuoTone="purpleToBlue" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Hava an account?</span>
            <Link to="/signin" className="text-blue-500 ml-2">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
