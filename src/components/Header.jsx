import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Header() {
  return <nav>
    <h1>Inspiration</h1>
    <main>
        <HashLink to={"/#home"}>HOME</HashLink>
        <Link to={"/contact"}>CONTACT</Link>
        <HashLink to={"/#about"}>ABOUT</HashLink>
        <HashLink to={"/#strength"}>STRENGTH</HashLink>
        <Link to={"/services"}>SERVICES</Link>
    </main>
  </nav>;
};

export default Header