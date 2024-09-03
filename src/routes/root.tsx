import logo from "../logo.svg";
import React from "react";
import Nav from "../components/Nav";

export default function Root() {
  return (
    <>
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
      </header>
      <h1>Form Packages</h1>
    </>
  );
}