import React from "react";

function Footer() {
  const today = new Date();

  return (
    <footer className="fixed-bottom text-center bg-primary text-light">
      <p> Copyright &copy; {today.getFullYear()} </p>
    </footer>
  );
}

export default Footer;
