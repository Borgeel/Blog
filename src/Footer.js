import React from "react";

function Footer() {
  const today = new Date();

  return (
    <footer className="position-sticky text-center bg-dark text-light p-2 align-items-center">
      <p> Copyright &copy; {today.getFullYear()} </p>
    </footer>
  );
}

export default Footer;
