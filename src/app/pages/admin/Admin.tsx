import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

export default function Admin() {
  return (
    <div className="flex m-5 gap-5 ">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-4">
          
        </main>
      </div>
    </div>
  );
}
