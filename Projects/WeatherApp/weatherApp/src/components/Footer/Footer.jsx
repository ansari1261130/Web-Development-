import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6 space-y-8 md:space-y-0">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2">
            <img
              className="h-10 w-10 rounded-xl"
              src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png?rf=1024"
              alt="Weather Service Logo"
            />
            <p className="text-lg font-semibold">Your Weather Service</p>
            
          </div>
          <p className="text-sm mt-2 text-gray-400">
            Providing accurate weather forecasts since 2020.
          </p>
          <nav className="flex items-center gap-4 mt-4">
            <a href="#" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13,10h3v3h-3v7h-3v-7H7v-3h3V8.7c0-1.2,0.4-2.7,1.1-3.5C11.9,4.4,12.8,4,13.9,4H16v3h-2.1C13.4,7,13,7.4,13,7.9V10z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.16,1H2.84C1.82,1,1,1.82,1,2.84v18.32C1,22.18,1.82,23,2.84,23h18.32C22.18,23,23,22.18,23,21.16V2.84 C23,1.82,22.18,1,21.16,1z M15.23,20l-4.36-6.21L5.41,20H4l6.25-7.1L4,4h4.76l4.13,5.88L18.07,4h1.41l-5.96,6.78L20,20H15.23z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="5"/>
                <path d="M16.83,3H7.17C4.4,3,2,5.4,2,8.17v7.66C2,18.6,4.4,21,7.17,21h9.66C19.6,21,22,18.6,22,15.83V8.17 C22,5.4,19.6,3,16.83,3z M12,17.3c-2.93,0-5.3-2.37-5.3-5.3S9.07,6.7,12,6.7s5.3,2.37,5.3,5.3S14.93,17.3,12,17.3z M17.5,8.5 c-0.69,0-1.25-0.56-1.25-1.25S16.81,6,17.5,6s1.25,0.56,1.25,1.25S18.19,8.5,17.5,8.5z"/>
              </svg>
            </a>
          </nav>
        </div>

        {/* Quick Links Section */}
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2 font-extralight text-gray-400">
            <li><NavLink className="hover:underline" to="/current-weather">Current Weather</NavLink></li>
            <li><NavLink className="hover:underline" to="/weather-maps">Weather Maps</NavLink></li>
            <li><NavLink className="hover:underline" to="/weather-radar">Weather Radar</NavLink></li>
            <li><NavLink className="hover:underline" to="/weather-alerts">Weather Alerts</NavLink></li>
            <li><NavLink className="hover:underline" to="/contacts">Contacts</NavLink></li>
          </ul>
        </div>

        {/* Forecasts Section */}
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Forecasts</h2>
          <ul className="space-y-2 font-extralight text-gray-400">
            <li><NavLink className="hover:underline" to="/hourly-forecast">Hourly Forecast</NavLink></li>
            <li><NavLink className="hover:underline" to="/daily-forecast">Daily Forecast</NavLink></li>
            <li><NavLink className="hover:underline" to="/extended-forecast">Extended Forecast</NavLink></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Legal</h2>
          <ul className="space-y-2 font-extralight text-gray-400">
            <li><NavLink className="hover:underline" to="/terms-of-use">Terms of Use</NavLink></li>
            <li><NavLink className="hover:underline" to="/privacy-policy">Privacy Policy</NavLink></li>
            <li><NavLink className="hover:underline" to="/cookie-policy">Cookie Policy</NavLink></li>
            <li><NavLink className="hover:underline" to="/disclaimer">Disclaimer</NavLink></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
