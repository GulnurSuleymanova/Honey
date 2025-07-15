import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Heart, ShoppingBasket, UserPen, X, Logs, Link } from 'lucide-react';
import { NavLink } from 'react-router';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative mx-auto md:h-[90px] w-[1310px] mt-7 lg:px-[15px] pt-[15px] md:rounded-[90px] bg-[#FBF2E0] shadow-md dark:text-gray-800">
      <div className="relative flex justify-between items-center h-full mx-auto">

        <button
          onClick={() => setIsOpen(true)}
          className="group bg-white duration-300 h-[50px] w-[50px] flex items-center justify-center rounded-full hover:bg-amber-950 cursor-pointer"
        >
          <Logs size={24} className="group-hover:text-white duration-300" />
        </button>

        <div className="absolute left-1/2 -translate-x-1/2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        <div className="flex items-center gap-2 z-40">
          <div className="relative">
            <a
              href="wishlist.jsx"
              aria-label="user"
              className="group bg-white duration-300 h-[50px] w-[50px] flex items-center justify-center rounded-full hover:bg-amber-950"
              style={{ boxShadow: '2px 3px 0 0 #FABE17' }}
            >
              <UserPen className="w-5 h-5 text-gray-700 group-hover:text-white duration-300" />
            </a>
          </div>

          <div className="relative">
            <a
              href="wishlist.jsx"
              aria-label="wishlist"
              className="group bg-white duration-300 h-[50px] w-[50px] flex items-center justify-center rounded-full hover:bg-amber-950"
              style={{ boxShadow: '2px 3px 0 0 #FABE17' }}
            >
              <Heart className="w-5 h-5 text-gray-700 group-hover:text-white duration-300" />
            </a>
            <span className="absolute -top-1 -right-1 bg-[#FABE17] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          <div className="relative">
            <a
              href="wishlist.jsx"
              aria-label="basket"
              className="group bg-white duration-300 h-[50px] w-[50px] flex items-center justify-center rounded-full hover:bg-amber-950"
              style={{ boxShadow: '2px 3px 0 0 #FABE17' }}
            >
              <ShoppingBasket className="w-5 h-5 text-gray-700 group-hover:text-white duration-300" />
            </a>
            <span className="absolute -top-1 -right-1 bg-[#FABE17] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <button onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>
        <ul className="p-4 space-y-2">
  <NavLink to='/' onClick={() => setIsOpen(false)} className="block p-2 rounded hover:bg-gray-100">
              Home
            </NavLink>    
              <NavLink to='/about' onClick={() => setIsOpen(false)} className="block p-2 rounded hover:bg-gray-100">
              About
            </NavLink>    </ul>
      </div>
    </header>
  );
};

export default Header;
