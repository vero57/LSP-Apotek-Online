import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Overview from "../../components/fe/Overview";

export default function Admin() {
  return (
    <div className="flex m-5 gap-5">
      <Sidebar activeItem="Overview" />
      <div className="flex-1">
        <Navbar />
        <main className="p-4">
          <Overview />
        </main>
      </div>
    </div>
  );
}
