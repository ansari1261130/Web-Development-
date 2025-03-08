import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0 bg-white p-4">
            <nav className="flex justify-around items-center">
                {/* Logo and Title */}
                <div>
                    <Link to="/" className="flex items-center gap-2">
                        <img 
                            src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png?rf=1024" 
                            alt="Weather Logo" 
                            className="h-10 w-10 rounded-xl" 
                        />
                        <h1 className="text-lg font-bold">Weather Services</h1>
                    </Link>
                </div>

                {/* NavBar Links */}
                <div>
                    <ul className="flex gap-6 transition-opacity duration-200 w-full">
                        <li>
                            <NavLink 
                                to="/current-weather" 
                                className={({ isActive }) => 
                                    `transition-colors duration-300 ${isActive ? "text-orange-700 font-bold" : "text-gray-700"}`
                                }
                            >
                                Current Weather
                            </NavLink>
                        </li>

                        {/* Forecasts Dropdown */}
                        <li className="relative group">
                            <NavLink 
                                to="/forecasts" 
                                className={({ isActive }) => 
                                    `transition-colors duration-300 ${isActive ? "text-orange-700 font-bold" : "text-gray-700"}`
                                }
                            >
                                Forecasts
                            </NavLink>
                            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-md py-1 lg:w-48 min-w-max">
                                <li>
                                    <NavLink 
                                        to="/hourly-forecast"  
                                        className={({ isActive }) => 
                                            `block px-4 py-2 transition-colors duration-300 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-100`
                                        }
                                    >
                                        Hourly Forecast
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to="/daily-forecast"
                                        className={({ isActive }) => 
                                            `block px-4 py-2 transition-colors duration-300 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-100`
                                        }
                                    >
                                        Weather Forecast
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to="/extended-forecast"
                                        className={({ isActive }) => 
                                            `block px-4 py-2 transition-colors duration-300 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-100`
                                        }
                                    >
                                        Extended Forecast
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        {/* Weather Dropdown */}
                        <li className="relative group">
                            <NavLink 
                                to="/weather-info" 
                                className={({ isActive }) => 
                                    `transition-colors duration-300 ${isActive ? "text-orange-700 font-bold" : "text-gray-700"}`
                                }
                            >
                                Weather
                            </NavLink>
                            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-md py-1 lg:w-48 min-w-max">
                                <li>
                                    <NavLink 
                                        to="/weather-maps"
                                        className={({ isActive }) => 
                                            `block px-4 py-2 transition-colors duration-300 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-100`
                                        }
                                    >
                                        Weather Maps
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to="/weather-alerts"
                                        className={({ isActive }) => 
                                            `block px-4 py-2 transition-colors duration-300 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-100`
                                        }
                                    >
                                        Weather Alerts
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <NavLink 
                                to="/gallery" 
                                className={({ isActive }) => 
                                    `transition-colors duration-300 ${isActive ? "text-orange-700 font-bold" : "text-gray-700"} hover:text-orange-700 hover:underline`
                                }
                            >
                                Gallery
                            </NavLink>
                        </li>

                        <li>
                            <NavLink 
                                to="/contact" 
                                className={({ isActive }) => 
                                    `transition-colors duration-300 ${isActive ? "text-orange-700 font-bold" : "text-gray-700"} hover:text-orange-700 hover:underline`
                                }
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
