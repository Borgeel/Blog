import React from "react";

function Footer() {
  const today = new Date();

  return (
    <footer className="fixed-bottom text-center bg-dark text-light p-2">
      <span> Copyright &copy; {today.getFullYear()} </span>
    </footer>
  );
}

export default Footer;
