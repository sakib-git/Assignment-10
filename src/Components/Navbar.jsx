import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import logo from '../assets/logo.png';

const Navbar = () => {
  const { user, setUser, LogOUt } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    LogOUt()
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-[1440px] mx-auto justify-between  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              <NavLink to="/" className={({ isActive }) => `font-bold  ${isActive ? 'bg-gradient-to-r to-orange-400 from-rose-500 text-white px-3 py-1 rounded-md' : ''}`}>
                Home
              </NavLink>

              <NavLink to="/bills" className={({ isActive }) => `font-bold ${isActive ? 'bg-gradient-to-r to-orange-400 from-rose-500 text-white px-3 py-1 rounded-md' : ''}`}>
                Bills
              </NavLink>
              {user ? (
                <NavLink to="/mybill" className={({ isActive }) => `font-bold ${isActive ? 'bg-gradient-to-r to-orange-400 from-rose-500 text-white px-3 py-1 rounded-md' : ''}`}>
                  my pay Bill
                </NavLink>
              ) : (
                ''
              )}
              {user ? (
                <NavLink to="/profile" className={({ isActive }) => `font-bold ${isActive ? 'bg-gradient-to-r to-orange-400 from-rose-500 text-white px-3 py-1 rounded-md' : ''}`}>
                  profile
                </NavLink>
              ) : (
                ''
              )}
            </ul>
          </div>
          <div className="bg-gradient-to-r to-orange-400 from-rose-500 w-13 h-13 rounded-full flex items-center">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-3 items-center">
            <NavLink to="/" className={({ isActive }) => `font-bold  ${isActive ? 'bg-gradient-to-r to-orange-400 from-rose-500 text-white px-3 py-1 rounded-md' : ''}`}>
              Home
            </NavLink>

            <NavLink to="/bills" className={({ isActive }) => `font-bold ${isActive ? 'bg-gradient-to-r to-orange-400 from-rose-500 text-white px-3 py-1 rounded-md' : ''}`}>
              Bills
            </NavLink>
            {user ? (
              <NavLink to="/mybill" className={({ isActive }) => `font-bold ${isActive ? 'bg-gradient-to-r to-orange-400 from-rose-500 text-white px-3 py-1 rounded-md' : ''}`}>
                my pay Bill
              </NavLink>
            ) : (
              ''
            )}
            {user ? (
              <NavLink to="/profile" className={({ isActive }) => `font-bold ${isActive ? 'bg-gradient-to-r to-orange-400 from-rose-500 text-white px-3 py-1 rounded-md' : ''}`}>
                profile
              </NavLink>
            ) : (
              ''
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-2">
              <div className="relative group">
                <div onClick={() => navigate('/profile')} className="w-10 h-10 bg-zinc-400 rounded-full overflow-hidden">
                  <img className="w-full h-full object-cover" src={user.photoURL} alt="User photo" />
                </div>
                <span className="text-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity dur bg-black/70 rounded-md py-1 px-2 text-white absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2">
                  {user.email}
                  <span className="absolute -top-2 left-1/2 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-black/70"></span>
                </span>
              </div>
              <button onClick={handleLogout} className="bg-gradient-to-r to-orange-400 from-rose-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 font-medium text-[12px] outline">
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="/login" className=" bg-gradient-to-r to-orange-400 from-rose-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 font-medium text-[12px] outline">
              LOG IN
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
