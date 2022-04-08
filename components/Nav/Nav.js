import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            Navbar
          </Link>
        </div>
      </nav>
    </>
  );
}
