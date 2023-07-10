'use client'

import SidebarAdmin from "@components/SidebarAdmin";
import Navbar from "@components/Navbar";

const AdminLayout = ({ children }) => {
  return (
    <>
      {/* Side Bar */}
      <div className="flex">
        <div className="w-72 h-screen sidebar">
          <SidebarAdmin />
        </div>
        <div className="w-full mt-3">
          <div className="flex flex-row justify-end p-3 mr-5 bg-white">
          <Navbar />
          </div>
          <main className="p-7">
            {children}
            </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
