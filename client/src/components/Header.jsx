import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import {
  Button,
  Navbar,
  TextInput,
  NavbarLink,
  NavbarToggle,
  NavbarCollapse,
} from "flowbite-react";

export default function Header() {
  const location = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 rounded-lg text-white">
          Dhava's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="grey" pill>
        <AiOutlineSearch />
      </Button>
      <div className="">
        <Button className="w-12 h-10 hidden sm:inline" color="grey" pill>
          <FaMoon />
        </Button>
        <Link to="/signin">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign In
          </Button>
        </Link>

        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink active={location === "/"} as={Link} to="/">
          Home
        </NavbarLink>
        <NavbarLink active={location === "/about"} as={Link} to="/about">
          About
        </NavbarLink>
        <NavbarLink active={location === "/projects"} as={Link} to="/projects">
          Projects
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
