// rrd imports
import { Form, NavLink } from "react-router-dom";
import "./Nav.css";

// library
import { BsCodeSquare, BsEmojiSunglassesFill } from "react-icons/bs";
import { TrashIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons

// assets
import logomark from "../assets/logomark.jpg";

import React, { useState } from "react";

const Nav = ({ userName }) => {
  const [showIcons, setShowIcons] = useState(false);

  const handleToggleIcons = () => {
    setShowIcons(!showIcons);
  };

  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={logomark} alt="Logo" className="logo" />
        <span className="logo-text">HomeBudget</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="logout"
          onSubmit={(event) => {
            if (!confirm("Delete user and all data?")) {
              event.preventDefault();
            }
          }}
        >
          <div className="button-container">
            <button type="submit" className="btn btn--warning">
              <span>Delete User</span>
              <TrashIcon width={20} />
            </button>
          </div>
        </Form>
      )}

      {/* Toggle Button for Social Media Icons */}
      <div className="social-icons-toggle">
        <button
          onClick={handleToggleIcons}
          aria-label="Toggle social media icons"
          className="toggle-button"
        >
          <div className="icon-container">
            <BsEmojiSunglassesFill className="icon" />
            <div className="tooltip">Project Info</div>
          </div>
        </button>
        <div className={`social-icons ${showIcons ? "show" : "hide"}`}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub className="icon" />
            <span className="tooltip-text">GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin className="icon" />
            <span className="tooltip-text">LinkedIn</span>
          </a>
          <a
            href="https://example.com" // Update with actual URL
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <BsCodeSquare className="icon" />
            <span className="tooltip-text">Projects</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
