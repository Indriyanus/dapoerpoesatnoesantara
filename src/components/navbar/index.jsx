"use client"

import React, { useState } from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { MdArrowDropDown } from 'react-icons/md';
import './style.css';

export default function Navbar() {
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
        <img
          src="/images/logodpnkedua.png"
          alt="Logo"
          className="w-10 h-10 md:w-10 md:h-10"
        />
        <button className="md:hidden text-white focus:outline-none ml-2" onClick={() => setIsServiceMenuOpen(!isServiceMenuOpen)}>
          <MdArrowDropDown className="h-6 w-6" />
        </button>
      </div>

      <div id='sisiTengah' className={`md:flex ${isServiceMenuOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
        <nav className=" flex md:flex-row gap-4 md:gap-10 mt-4 md:mt-0">
          <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out ">
            <a href="./homepage" className="font-bold text-xs md:text-xxs" style={{ textDecoration: 'none', color: 'inherit', border: '2px solid black', borderRadius: 50, padding: 5 }}>{language === 'EN' ? 'HOME' : 'BERANDA'}</a>
          </div>
          <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out">
            <a href="./aboutus" className="font-bold text-xs md:text-xxs" style={{ textDecoration: 'none', color: 'inherit', border: '2px solid black', borderRadius: 50, padding: 5 }}>{language === 'EN' ? 'ABOUT US' : 'TENTANG KAMI'}</a>
          </div>
          <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out">
            <a href="./product/" className="font-bold text-xs md:text-xxs" style={{ textDecoration: 'none', color: 'inherit', border: '2px solid black', borderRadius: 50, padding: 5 }}>{language === 'EN' ? 'PRODUCT' : 'PRODUK'}</a>
          </div>
          <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out">
            <a href="./contact/" className="font-bold text-xs md:text-xxs" style={{ textDecoration: 'none', color: 'inherit', border: '2px solid black', borderRadius: 50, padding: 5 }}>{language === 'EN' ? 'CONTACT' : 'KONTAK'}</a>
          </div>
          <div className="transform hover:scale-150 transition-transform duration-300 ease-in-out">
            <a href="./teams/" className="font-bold text-xs md:text-xxs" style={{ textDecoration: 'none', color: 'inherit', border: '2px solid black', borderRadius: 50, padding: 5 }}>{language === 'EN' ? 'TEAMS' : 'TIM'}</a>
          </div>
          <div className="relative">
            <div
              className="flex items-center cursor-pointer transform hover:scale-150 transition-transform duration-300 ease-in-out font-bold text-xs md:text-xxs"
              style={{ textDecoration: 'none', color: 'inherit', border: '2px solid black', borderRadius: 50, padding: 5 }}
              onClick={toggleServiceMenu}
            >
              <span>{language === 'EN' ? 'SERVICES' : 'LAYANAN'}</span>
              <MdArrowDropDown className="ml-1" />
            </div>
            {isServiceMenuOpen && (
              <div className="absolute bg-black text-white rounded-lg mt-2 py-2 w-40 md:w-80 shadow-lg">
                <ul>
                  <li className="px-4 py-2 hover:bg-black-700">
                    <a href="./dapoertelekomunikasi/">Dapoer Telekomunikasi</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-black-700">
                    <a href="./dapoerparfum/">Dapoer Parfum</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-black-700">
                    <a href="./dapoergrosir/">Dapoer Grosir</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-black-700">
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
          <AiOutlineUser className="h-5 w-5" />
          <a href="./login" className="text-black">{language === 'EN' ? 'LOGIN' : 'MASUK'}</a>
        </div>
        <div className="flex items-center">
          <p
            className={`font-bold text-xs md:text-md cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out ${language === 'EN' ? 'text-blue-500' : 'text-black'}`}
            onClick={() => switchLanguage('EN')}
          >
            EN
          </p>
          <span className="mx-2">|</span>
          <p
            className={`font-bold text-xs md:text-md cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out ${language === 'ID' ? 'text-blue-500' : 'text-black'}`}
            onClick={() => switchLanguage('ID')}
          >
            ID
          </p>
        </div>
      </div>
    </section>
  );
}
