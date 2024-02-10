import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg ">
      <Link className="btn btn-ghost text-xl" href="/">
        Apartments App
      </Link>
    </div>
  );
};

export default Navbar;
