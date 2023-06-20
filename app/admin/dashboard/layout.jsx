import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { BiPowerOff } from "react-icons/bi";
import {
  AiOutlineDelete,
  AiOutlineMessage,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { MdBlock, MdOutlineRemoveRedEye } from "react-icons/md";
import { TbLock } from "react-icons/tb";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-[100vh] w-full flex flex-col justify-start items-center">
          <div className="h-[5rem] w-full"></div>
          <div className="max-w-7xl w-full px-6 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start sm:items-start items-center">
            <div className="dark:bg-neutral-800 bg-gray-100 sm:min-w-fit sm:py-10 py-4 px-6 rounded-r-3xl rounded-bl-3xl flex sm:flex-col flex-wrap items-center justify-start sm:justify-center sm:items-start gap-4 sm:gap-6 text-sm dark:text-gray-300">
              <p className="text-center text-gray-400 font-semibold">
                Admin Quick Links
              </p>
              <Link href="/admin/dashboard" className="profile_link">
                <span className="profile_link_icon">
                  <RxDashboard />{" "}
                </span>
                <span className="profile_link_text">overview</span>
              </Link>
              <Link href="/admin/dashboard/new" className="profile_link">
                <span className="profile_link_icon">
                  <AiOutlineUsergroupAdd />{" "}
                </span>
                <span className="profile_link_text">new users</span>
              </Link>
              <Link href="/admin/dashboard/preview" className="profile_link">
                <span className="profile_link_icon">
                  <MdOutlineRemoveRedEye />{" "}
                </span>
                <span className="profile_link_text">preview user</span>
              </Link>
              <Link href="/admin/dashboard/approved" className="profile_link">
                <span className="profile_link_icon">
                  <GiCheckMark />{" "}
                </span>
                <span className="profile_link_text">approved</span>
              </Link>
              <Link href="/admin/dashboard/suspended" className="profile_link">
                <span className="profile_link_icon">
                  <TbLock />{" "}
                </span>
                <span className="profile_link_text">suspended</span>
              </Link>
              <Link href="/admin/dashboard/blocked" className="profile_link">
                <span className="profile_link_icon">
                  <MdBlock />{" "}
                </span>
                <span className="profile_link_text">blocked</span>
              </Link>
              <Link href="/admin/dashboard/deleted" className="profile_link">
                <span className="profile_link_icon">
                  <AiOutlineDelete />{" "}
                </span>
                <span className="profile_link_text">deleted</span>
              </Link>
              <Link href="/admin/dashboard/messages" className="profile_link">
                <span className="profile_link_icon">
                  <AiOutlineMessage />{" "}
                </span>
                <span className="profile_link_text">messages</span>
              </Link>
              <Link href="/" className="profile_link">
                <span className="profile_link_icon">
                  <BiPowerOff />{" "}
                </span>
                <span className="profile_link_text">Log Out</span>
              </Link>
            </div>
            {children}
          </div>
          <div className="h-[2.5rem] w-full"></div>
        </div>
      </body>
    </html>
  );
}
