import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false); // use same naming

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode"); // toggles body class
  };

  return (
    <div className="Header">
      <div>
        <img
          className="logo"
          src="https://instagram.fblr4-4.fna.fbcdn.net/v/t1.15752-9/553694175_792320946905951_9330059155232160_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=xFu4rUDSziQQ7kNvwH2z1GE&_nc_oc=AdnThcrwRRKpGztfr-vI_pAucqRuup8xHFHXrQXw68cK9z1fEkc41ZdlaDGoLDA187U&_nc_zt=23&_nc_ht=instagram.fblr4-4.fna&oh=03_Q7cD3gH7QdZeVQ3jEVAlEV7Teut5je4SGTPaRjIpg-o7s322jg&oe=690EF468"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <button className="btn" onClick={toggleTheme}>
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
