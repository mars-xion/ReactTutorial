import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";

// assets
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";

// style
import "../styles/nav.css";

export default function Nav() {
  const location = useLocation();

  const getNavPositionClass = () => {
    switch (location.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "ABOUT";
      case "/skills":
        return "SKILLS";
      case "/projects":
        return "PROJECTS";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    }
  };

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  // check weither the past nav class that we are gonna pass as an argumint matches the current nav postion class
  //check which page we are on..
  const isCurrentPage = (navClass) => {
    return navClass === navPositionClass;
  };

  // what we put in difrent nav elemeints,path, image, text, paga title and class
  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? "nav-link current" : "nav-link";

    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };

  return (
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink(
        "/", //to
        astronautHelmet, //imgsrc
        "astronaut helmet icon", //altText
        "nav-about" //navClass
      )}
      {renderNavLink(
        "/skills", //to
        deadEye, //imgsrc
        "deadEye icon", //altText
        "nav-skills" //navClass
      )}
      {renderNavLink(
        "/projects", //to
        stack, //imgsrc
        "stack icon", //altText
        "nav-projects" //navClass
      )}
      {renderNavLink(
        "/contact", //to
        envelope, //imgsrc
        "envelope icon", //altText
        "nav-contact" //navClass
      )}
    </nav>
  );
}
