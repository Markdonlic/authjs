import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="sm:w-2/3 w-full px-6 flex justify-between text-sm">
        <div className="w-auto flex items-center justify-start gap-1">
          <Link href="/" className="flex items-center gap-1 justify-start">
            <Image
              alt="auth logo"
              src="/icons/auth-logo.svg"
              height={16}
              width={16}
              className=""
            />
            <span className="text-neutral-500 dark:text-slate-400">Auth</span>
          </Link>
        </div>
        <div className="flex justify-between items-center gap-2">
          <Link className="link_text" href="/demo">
            Guest
          </Link>
          <Link className="link_text" href="/user">
            User
          </Link>
          <Link className="link_text" href="/admin/dashboard">
            Admin
          </Link>
          <Link className="btn_login" href="/auth">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
