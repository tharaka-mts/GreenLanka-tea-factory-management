import Sidebar from "@components/SidebarAdmin";
import Navbar from "@components/Navbar";
import { Children } from "react";

const AdminLayout = ({ children }) => {
  return (
    <>
      {/* Side Bar */}
      <div className="flex relative">
        <div
          className="fixed right-4 bottom-4"
          style={{ zIndex: "1000" }}
        ></div>
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
          <Sidebar />
        </div>
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          <Navbar />
        </div>
      </div>
      <main>{children}</main>
    </>
  );
};

export default AdminLayout;
