import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Heart, ShoppingBasket, UserPen, X, Logs, Globe } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useAddtocard } from '../context/AddtocardContext';
import DarkModeToggle from './DarkModeToggle';
import i18n from '../i18n/i18next';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openLang, setOpenLang] = useState(false); // 🔹 dil select açılıb bağlansın
  const { wishlist } = useWishlist();
  const { addtocard } = useAddtocard();
  const { t } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setOpenLang(false);
  };

  return (
    <header className="relative mx-auto md:h-[90px] w-[1310px] mt-7 lg:px-[15px] pt-[15px] md:rounded-[90px] shadow-md z-40">
      <div className="relative flex justify-between items-center h-full mx-auto">

        {/* Sol menyu açılma düyməsi */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsOpen(true)}
            className="group bg-white text-gray-700 duration-300 h-[50px] w-[50px] flex items-center justify-center rounded-full hover:bg-amber-950 cursor-pointer"
          >
            <Logs size={24} className="group-hover:text-white duration-300" />
          </button>

          {/* 🔹 Qlobus və dil seçimi */}
          <div className="relative">
            <button
              onClick={() => setOpenLang(!openLang)}
              className="group bg-white text-gray-700 duration-300 h-[50px] w-[50px] flex items-center justify-center rounded-full hover:bg-amber-950 cursor-pointer"
            >
              <Globe size={22} className="group-hover:text-white duration-300" />
            </button>

            {openLang && (
              <div className="absolute top-14 left-0 bg-white border rounded-lg shadow-lg p-2 w-28">
                <button
                  onClick={() => changeLang("az")}
                  className={`block w-full text-left px-3 py-1 rounded ${i18n.language === "az" ? "bg-amber-950 text-white" : "hover:bg-gray-100"}`}
                >
                  AZ
                </button>
                <button
                  onClick={() => changeLang("en")}
                  className={`block w-full text-left px-3 py-1 rounded ${i18n.language === "en" ? "bg-amber-950 text-white" : "hover:bg-gray-100"}`}
                >
                  EN
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Sağdakı ikonlar */}
        <div className="flex items-center gap-2 z-40">
          <DarkModeToggle />

          {/* User */}
          <div className="relative">
            <NavLink to='/login' onClick={() => setIsOpen(false)} aria-label="user"
              className="group bg-white duration-300 h-[50px] w-[50px] flex items-center justify-center rounded-full hover:bg-amber-950"
              style={{ boxShadow: '2px 3px 0 0 #FABE17' }}>
              <UserPen className="w-5 h-5 text-gray-700 group-hover:text-white duration-300" />
            </NavLink>
          </div>

          {/* Wishlist */}
          <div className="relative">
            <NavLink to='/wishlist' onClick={() => setIsOpen(false)} aria-label="wishlist"
              className="group bg-white duration-300 h-[50px] w-[50px] flex items-center justify-center rounded-full hover:bg-amber-950"
              style={{ boxShadow: '2px 3px 0 0 #FABE17' }}>
              <Heart className="w-5 h-5 text-gray-700 group-hover:text-white duration-300" />
            </NavLink>
            <span className="absolute -top-1 -right-1 bg-[#FABE17] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {wishlist.length}
            </span>
          </div>

          {/* Add to cart */}
          <div className="relative">
            <NavLink to='/addtocard' onClick={() => setIsOpen(false)} aria-label="cart"
              className="group bg-white duration-300 h-[50px] w-[50px] flex items-center justify-center rounded-full hover:bg-amber-950"
              style={{ boxShadow: '2px 3px 0 0 #FABE17' }}>
              <ShoppingBasket className="w-5 h-5 text-gray-700 group-hover:text-white duration-300" />
            </NavLink>
            <span className="absolute -top-1 -right-1 bg-[#FABE17] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {addtocard.length}
            </span>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#FBF2E0] side shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <button onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>
        <ul className="p-4 space-y-2">
          <NavLink to='/' onClick={() => setIsOpen(false)} className="block p-2 rounded hover:bg-gray-100">
                      {t("sidebar.0")}
          </NavLink>
          <NavLink to='/shop' onClick={() => setIsOpen(false)} className="block p-2 rounded hover:bg-gray-100">
            {t("sidebar.1")}
          </NavLink>
          <NavLink to='/about' onClick={() => setIsOpen(false)} className="block p-2 rounded hover:bg-gray-100">
            {t("sidebar.2")}
          </NavLink>
          <NavLink to='/contact' onClick={() => setIsOpen(false)} className="block p-2 rounded hover:bg-gray-100">
            {t("sidebar.3")}
          </NavLink>
          <NavLink to='/faq' onClick={() => setIsOpen(false)} className="block p-2 rounded hover:bg-gray-100">
            {t("sidebar.4")}
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
