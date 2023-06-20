import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="w-full absolute top-1/4 flex item-center justify-center">
      <div className="w-96">
        <div className="flex mb-8 flex-col gap-4 items-center justify-center">
          <Image
            className="rounded-full"
            alt="profile image"
            src="/icons/auth-logo.svg"
            width={40}
            height={40}
          />
          <p className="text-gray-400 text-sm">Login</p>
        </div>
        <form className="flex flex-col w-full gap-2">
          <label className="flex-col w-full">
            <input
              name="username"
              className="input_signin"
              type="text"
              placeholder="Username or Email address"
            />
          </label>
          <label className="flex-col w-full">
            <input
              name="password"
              className="input_signin"
              type="text"
              placeholder="Password"
            />
          </label>
          <label className="flex items-center justify-start gap-2 mt-2 text-xs px-2">
            <input name="check" type="checkbox" />
            <span>Keep me signed in</span>
          </label>
          <div className="flex mt-2 w-full text-sm text-gray-600 justify-between items-center">
            <button className="btn_login">Login</button>
            <span>
              <Link href="/auth/reset-password" className="link_text">
                Forgot pawword?
              </Link>
              {" | "}
              <Link href="/auth/sign-up" className="link_text text-orange-500">
                Sign Up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
