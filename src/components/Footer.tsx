import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-links">
          <li className="footer-link">one</li>
          <li className="footer-link">two</li>
          <li className="footer-link">three</li>
        </ul>
        <p>
          Designed and built by{" "}
          <a
            href="http://louiefitzpatrick.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Louie Fitzpatrick
          </a>
          <br />
          <a
            href="http://github.com/fitzpa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
