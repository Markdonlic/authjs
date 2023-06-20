import Link from "next/link";

const UserLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="min-h-[100vh] px-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="h-[5rem]"></div>
          <div className="dark:bg-neutral-700 bg-gray-100 sm:py-10 py-4 px-6 rounded-r-3xl rounded-bl-3xl flex sm:flex-col flex-wrap items-center justify-start sm:justify-center sm:items-start gap-4 sm:gap-6 text-xs dark:text-gray-300">
            <p className="text-center text-gray-400 font-semibold">
              Demo Quick Links
            </p>
            <Link href="/demo" className="profile_link">
              <span className="profile_link_icon">&#8614; </span>
              <span className="profile_link_text">Verify Account</span>
            </Link>
            <Link href="/demo/settings" className="profile_link">
              <span className="profile_link_icon">&#8614; </span>
              <span className="profile_link_text">profile settings</span>
            </Link>
            <Link href="/demo/contact-admin" className="profile_link">
              <span className="profile_link_icon">&#8614; </span>
              <span className="profile_link_text">contact admin</span>
            </Link>
            <Link href="#" className="profile_link">
              <span className="profile_link_icon">&#8614; </span>
              <span className="profile_link_text">Log Out</span>
            </Link>
          </div>
          {children}
          <div className="h-[2.5rem]"></div>
        </div>
      </body>
    </html>
  );
};

export default UserLayout;
