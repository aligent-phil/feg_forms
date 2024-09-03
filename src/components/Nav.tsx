import React from "react";
import classes from './nav.module.scss';

const Nav = () =>{
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href={`/informed`}>Informed</a>
        </li>
        <li>
          <a href={`/formik`}>Formik</a>
        </li>
        <li>
          <a href={`/react-hook-form`}>React Hook Form</a>
        </li>
        <li>
          <a href={`/react-final-form`}>React Final Form</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;