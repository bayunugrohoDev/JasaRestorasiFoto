"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-dark">
      <div className="flex justify-between items-center mx-auto px-6 py-4 container">
        <h1 className="font-bold text-white text-xl">JasaRestorasiFoto</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className={`md:flex md:items-center md:space-x-6 hidden transition-all duration-300 ease-in-out`}>
          <ul className="flex md:flex-row flex-col md:space-x-6 space-y-4 md:space-y-0 text-white">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#services">Layanan</Link></li>
            <li><Link href="#keahlian">Keahlian</Link></li>
            <li><Link href="#keunggulan">Keunggulan</Link></li>
            <li><Link href="#pricing">Harga</Link></li>
            <li><Link href="#portfolio">Portofolio</Link></li>
            <li><Link href="#faq">FAQ</Link></li>
            <li><Link href="#pembayaran">Pembayaran</Link></li>
            <li><Link href="#pemesanan">Pemesanan</Link></li>
            <li><Link href="#contact">Kontak</Link></li>
          </ul>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden bg-dark transition-all duration-300 ease-in-out">
          <ul className="flex flex-col items-center space-y-4 px-6 py-4 text-white">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#services">Layanan</Link></li>
            <li><Link href="#keahlian">Keahlian</Link></li>
            <li><Link href="#keunggulan">Keunggulan</Link></li>
            <li><Link href="#pricing">Harga</Link></li>
            <li><Link href="#portfolio">Portofolio</Link></li>
            <li><Link href="#faq">FAQ</Link></li>
            <li><Link href="#pembayaran">Pembayaran</Link></li>
            <li><Link href="#pemesanan">Pemesanan</Link></li>
            <li><Link href="#contact">Kontak</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
