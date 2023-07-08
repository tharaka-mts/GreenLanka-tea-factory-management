'use client'
import SidebarManager from "@components/SidebarManager";
import Navbar from "@components/Navbar";

const ManagerLayout = ({ children }) => {
  return (
    <>
      {/* Side Bar */}
      <div className="flex">
        <div className="w-72 h-screen sidebar">
          <SidebarManager />
        </div>
        <div className="w-full mt-3">
          <div className="flex flex-row justify-end p-3 mr-5 bg-white">
          <Navbar />
          </div>
          <main className="p-7">{children}</main>
        </div>
      </div>
    </>
  );
};

export default ManagerLayout;