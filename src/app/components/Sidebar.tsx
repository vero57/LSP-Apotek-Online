export default function Sidebar() {
  return (
    <aside className="bg-gray-200 p-4 w-60 h-230">
      <div className="mb-10">
        <h2 className="font-bold text-[2em]">Menu</h2>
      </div>
      <ul className="list-none p-0">
        <li className="mb-6 font-bold text-[1.2em]"><a href="/admin" className="text-gray-800 hover:underline">Admin</a></li>
        <li className="mb-6 font-bold text-[1.2em]"><a href="/apoteker" className="text-gray-800 hover:underline">Apoteker</a></li>
        <li className="mb-6 font-bold text-[1.2em]"><a href="/karyawan" className="text-gray-800 hover:underline">Karyawan</a></li>
        <li className="mb-6 font-bold text-[1.2em]"><a href="/kasir" className="text-gray-800 hover:underline">Kasir</a></li>
        <li className="mb-6 font-bold text-[1.2em]"><a href="/pemilik" className="text-gray-800 hover:underline">Pemilik</a></li>
      </ul>
    </aside>
  );
}
