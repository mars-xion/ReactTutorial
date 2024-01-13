import React, { Component } from "react";
import AboutMenuItem from "./AboutMenuItem";
import AboutSubheading from "./AboutSubheading";
import subheadingsData from "./subheadingsData";

import "../styles/aboutMenu.css";
import personalIcon from "../assets/moebius-triangle.png";
import educationIcon from "../assets/upgrade.png";
import intrenshipIcon from "../assets/triple-corn.png";

export default class AboutMenu extends Component {
  //create the initial state, keep track of the chagnes
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
      activeSubheading: 1,
    };
  }

  handelMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
      activeSubheading: 1,
    });
  };

  handelSubheadingClick = (subheading) => {
    this.setState({
      activeSubheading: subheading,
    });
  };

  render() {
    //structer the active menu items and subheadings
    const { activeMenuItem, activeSubheading } = this.state;
    const menuItems = ["PERSONAL", "EDUCATION", "INTRENSHIP"];
    const activeMenuTitle = menuItems[activeMenuItem - 1];
    const activeMenuIcon =
      activeMenuTitle === "PERSONAL"
        ? personalIcon
        : activeMenuTitle === "EDUCATION"
        ? educationIcon
        : intrenshipIcon;

    const subheadings = subheadingsData[activeMenuItem];

    return (
      <>
        <div className="menu">
          {menuItems.map((item, index) => (
            <AboutMenuItem
              key={index}
              title={item}
              active={activeMenuItem === index + 1}
              onClick={() => this.handelMenuItemClick(index + 1)}
            />
          ))}
        </div>
        <div className="sub-container">
          <div className="icon-title-container">
            <img src={activeMenuIcon} alt={activeMenuTitle} className="icon" />
            <h3>{activeMenuTitle}</h3>
          </div>
          {subheadings.map((subheading, index) => (
            <AboutSubheading
              key={index}
              title={subheading.title}
              content={subheading.content}
              active={activeSubheading === index + 1}
              onClick={() => this.handelSubheadingClick(index + 1)}
              menuItem={activeMenuItem}
            />
          ))}
        </div>
      </>
    );
  }
}
