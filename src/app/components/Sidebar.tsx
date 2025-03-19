"use client";

interface SidebarProps {
  activeItem: string;
}

export default function Sidebar({ activeItem }: SidebarProps) {
  const menuItems = [
    { title: "Dashboard", subItems: ["Overview", "Stats", "Reports"] },
    { title: "Obat", subItems: ["List Obat", "Tambah Obat"] },
    { title: "Penjualan", subItems: ["Transaksi", "Laporan Penjualan"] },
    { title: "Pemilik", subItems: ["Profil Pemilik", "Management Pemilik"] },
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
            <div className="mb-1 font-bold text-[1.2em] flex justify-between items-center">
              <span className="text-gray-800 flex-1">{item.title}</span>
            </div>
            <ul className="list-none pl-5 text-[14.5px]">
              {item.subItems.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className={`mb-2 text-[1em] p-1 rounded cursor-pointer ${
                    subItem === activeItem ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-300"
                  }`}
                >
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
