import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const NavBar = () => {
  const location = useLocation();
  const logo = 'https://icons.veryicon.com/png/o/business/bank-logo-collection/bank-of-america-logo.png'
  return (
    <div className="navbar bg-base-100 border">
      <div className="navbar-start">
        {/* Replace the text with your logo */}
        <Link to="https://www.cornellfintechclub.com/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="CFT Stock Sentiment Logo" className="h-8 w-auto" />
        </Link>
        <a className="btn btn-ghost normal-case text-xl">FinTech Hackathon</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <Link to="/"><button className={location.pathname === '/' ? 'btn btn-primary' : 'btn btn-ghost'}>Home</button></Link>
        <Link to="/analysis"><button className={location.pathname === '/analysis' ? 'btn btn-primary' : 'btn btn-ghost'}>Analysis</button></Link>
        <Link to="/news"><button className={location.pathname === '/news' ? 'btn btn-primary' : 'btn btn-ghost'}>News</button></Link>
        <Link to="/aboutus"><button className={location.pathname === '/aboutus' ? 'btn btn-primary' : 'btn btn-ghost'}>About Us</button></Link>
        <Link to="/contact"><button className={location.pathname === '/contact' ? 'btn btn-primary' : 'btn btn-ghost'}>Contact</button></Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <span className="text-3xl">P</span>
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
