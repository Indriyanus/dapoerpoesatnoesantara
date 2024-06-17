"use client";

import React, { useState } from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { MdArrowDropDown } from 'react-icons/md';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import './style.css';

const Navbar = () => {
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  const toggleServiceMenu = () => {
    setIsServiceMenuOpen(!isServiceMenuOpen);
  };

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <section id='jumbotronNavbar' className="flex flex-col md:flex-row justify-between items-center py-2 px-5 md:px-10 rounded-none shadow-md bg-black bg-opacity-20 fixed top-0 w-full z-10 backdrop-blur-sm">
      <div id='sisiKiri' className="flex flex-1 justify-start items-center">
        <Image
          src="/images/logodpnkedua.png"
          alt="Logo"
          width={40}
          height={40}
          priority
        />
        <button 
          className="md:hidden text-white focus:outline-none ml-2" 
          onClick={() => setIsServiceMenuOpen(!isServiceMenuOpen)} 
          aria-label="Toggle menu">
          <MdArrowDropDown className="h-6 w-6" />
        </button>
      </div>

      <div id='sisiTengah' className={`md:flex ${isServiceMenuOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
        <nav className="flex md:flex-row gap-4 md:gap-10 mt-4 md:mt-0">
          <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out">
            <a href="./homepage" className="font-bold text-xs md:text-xxs text-white bg-black rounded-full py-1 px-3" style={{ textDecoration: 'none' }}>
              {language === 'EN' ? 'HOME' : 'BERANDA'}
            </a>
          </div>
          <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out">
            <a href="./aboutus" className="font-bold text-xs md:text-xxs text-white bg-black  rounded-full py-1 px-3" style={{ textDecoration: 'none' }}>
              {language === 'EN' ? 'ABOUT US' : 'TENTANG KAMI'}
            </a>
          </div>
          <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out">
            <a href="./product/" className="font-bold text-xs md:text-xxs text-white bg-black  rounded-full py-1 px-3" style={{ textDecoration: 'none' }}>
              {language === 'EN' ? 'PRODUCT' : 'PRODUK'}
            </a>
          </div>
          <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out">
            <a href="./contact/" className="font-bold text-xs md:text-xxs text-white bg-black rounded-full py-1 px-3" style={{ textDecoration: 'none' }}>
              {language === 'EN' ? 'CONTACT' : 'KONTAK'}
            </a>
          </div>
          <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out">
            <a href="./teams/" className="font-bold text-xs md:text-xxs text-white bg-black rounded-full py-1 px-3" style={{ textDecoration: 'none' }}>
              {language === 'EN' ? 'TEAMS' : 'TIM'}
            </a>
          </div>
          <div className="relative">
            <div
              className="flex items-center cursor-pointer transform hover:scale-150 transition-transform duration-300 ease-in-out font-bold text-xs md:text-xxs text-white bg-black rounded-full py-1 px-3"
              onClick={toggleServiceMenu}
              aria-haspopup="true"
              aria-expanded={isServiceMenuOpen}
              aria-label="Services menu"
            >
              <span>{language === 'EN' ? 'SERVICES' : 'LAYANAN'}</span>
              <MdArrowDropDown className="ml-1" />
            </div>
            {isServiceMenuOpen && (
              <div className="absolute bg-black text-white rounded-lg mt-2 py-2 w-40 md:w-80 shadow-lg" role="menu">
                <ul>
                  <li className="px-4 py-2 hover:bg-black-700" role="menuitem">
                    <a href="./dapoertelekomunikasi/">Dapoer Telekomunikasi</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-black-700" role="menuitem">
                    <a href="./dapoerparfum/">Dapoer Parfum</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-black-700" role="menuitem">
                    <a href="./dapoergrosir/">Dapoer Grosir</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-black-700" role="menuitem">
                    <a href="./dapoerphotography/">Dapoer Photography</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
      <div id='sisiKanan' className="flex flex-1 justify-end items-center gap-4 md:gap-5 mt-4 md:mt-0">
        <div className="flex flex-col items-center font-bold text-xs transform hover:scale-110 transition-transform duration-300 ease-in-out">
          <AiOutlineUser className="h-5 w-5" aria-hidden="true"/>
          <a href="./login" className="text-black">{language === 'EN' ? 'LOGIN' : 'MASUK'}</a>
        </div>
        <div className="flex items-center">
          <p
            className={`font-bold text-xs md:text-md cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out ${language === 'EN' ? 'text-blue-500' : 'text-black'}`}
            onClick={() => switchLanguage('EN')}
            aria-label="Switch to English"
          >
            EN
          </p>
          <span className="mx-2 text-black">|</span>
          <p
            className={`font-bold text-xs md:text-md cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out ${language === 'ID' ? 'text-blue-500' : 'text-black'}`}
            onClick={() => switchLanguage('ID')}
            aria-label="Switch to Indonesian"
          >
            ID
          </p>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
