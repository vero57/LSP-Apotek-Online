export default function Navbar() {
  return (
    <nav className="bg-red-800 p-4 flex justify-between items-center">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded-md ml-4"
      />
      <div className="flex items-center gap-4 mr-4">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          
        </div>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          
        </div>
      </div>
    </nav>
  );
}
