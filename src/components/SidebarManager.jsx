import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiThreeLeaves } from "react-icons/gi";
import { managerLinks } from "@data/dummy";

const SidebarManager = ({ navLink }) => {
  const pathname = usePathname();
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-xl m-2 bg-gradient-to-r from-green-400 to-green-500";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-xl text-gray-500 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="mt-3 ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      <div className="flex justify-between items-center">
        <Link
          href="home"
          className="items-center gap-3 ml-3 mt-4 flex text-2xl font-extrabold tracking-tight dark:text-white text-slate-900"
        >
          <GiThreeLeaves className="fill-green-500" />{" "}
          <span className="green_gradient">Green Lanka</span>
        </Link>
      </div>
      <div className=" mt-16 ">
        {managerLinks.map((item) => (
          <div key={item.title}>
            {item.links.map((link) => {
              const isActive = pathname.startsWith(`/${link.url}`);

              return (
                <Link
                  href={`/${link.url}`}
                  key={link.name}
                  className={isActive ? activeLink : normalLink}
                >
                  {link.icon} <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarManager;
