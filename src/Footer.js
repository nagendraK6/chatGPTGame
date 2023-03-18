import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Social</h3>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/policy">Policy</a>
          </li>
          <li>
            <a href="/directory">Directory</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Legal</h3>
        <ul>
          <li>
            <a href="/legal-policy">Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
