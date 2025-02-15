import React, { useState } from "react";

import { IoSearch, IoChevronDownOutline } from "react-icons/io5";
import { BiHome } from "react-icons/bi";
import { HiChevronDoubleRight } from "react-icons/hi";
import Logo from "./Logo";
import Modal from "./Modal";

const items = [
  {
    label: "Beranda",
    href: "/",
    icon: <BiHome className="text-lg" />,
  },
  {
    label: "Cari Film",
    href: "/tracker",
    icon: <IoSearch className="text-lg" />,
  },
];

const Item = ({ label, icon }) => {
  return (
    <div className="flex items-center gap-1 text-sm font-normal tracking-wide">
      {icon}
      {label}
    </div>
  );
};

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="flex items-center justify-between w-full h-20 px-4 py-5 border-b md:px-32 bg-[#021c3d] border-b-white/20">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="text-base font-bold">Cinema Online</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col w-6 h-4 overflow-hidden rounded">
            <span className="w-full h-full bg-red-500"></span>
            <span className="w-full h-full bg-white"></span>
          </div>
          <p className="text-sm">
            ID
            <span className="text-white/50">-ID</span>
          </p>
          <IoChevronDownOutline className="text-sm" />
          <button
            className="px-4 py-2 bg-[#9bc7fd] rounded-full hover:brightness-90 font-bold text-xs uppercase"
            onClick={() => setIsModalOpen(true)}
          >
            Masuk
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between w-full h-16 px-4 py-5 md:px-32 bg-[#021c3d]">
        <div className="flex items-center gap-4">
          {items.map((item) => (
            <Item key={item.label} {...item} />
          ))}
        </div>
        <HiChevronDoubleRight className="text-lg" />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Header;
