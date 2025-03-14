"use client";

import { FaArrowRight } from "react-icons/fa";

export default function Sidebar() {
  const menuItems = [
    { title: "Dashboard", subItems: ["Overview", "Stats", "Reports"] },
    { title: "Obat", subItems: ["List Obat", "Tambah Obat"] },
    { title: "Penjualan", subItems: ["Transaksi", "Laporan Penjualan"] },
    { title: "Pemilik", subItems: ["Profil Pemilik", "Pengaturan"] },
    { title: "Distributor", subItems: ["Daftar Distributor", "Management Distributor"] },
  ];

  return (
    <aside className="bg-gray-200 p-4 w-55 h-170">
      <div className="mb-4">
        <h2 className="font-bold text-[2em]">Menu</h2>
      </div>
      <ul className="list-none p-0">
        {menuItems.map((item, index) => (
          <li key={index}>
            <div className="mb-2 font-bold text-[1.2em] flex justify-between items-center">
              <span className="text-gray-800 flex-1">{item.title}</span>
            </div>
            <ul className="list-none pl-4">
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex} className="mb-2 text-[1em] text-gray-700">
                  {subItem}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
}
