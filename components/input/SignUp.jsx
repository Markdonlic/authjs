import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
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
          <p className="text-gray-400 text-sm">Sign Up</p>
        </div>
        <form className="flex flex-col w-full gap-2">
          <label className="flex-col w-full">
            <input
              name="username"
              className="input_signin"
              type="text"
              disabled
              placeholder="Username"
            />
          </label>
          <label className="flex-col w-full">
            <input
              name="Email"
              className="input_signin"
              type="email"
              placeholder="Email address"
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
          <label className="flex-col w-full">
            <input
              name="confirm-password"
              className="input_signin"
              type="text"
              placeholder="Confirm Password"
            />
          </label>
          <div className="flex mt-2 w-full text-sm text-gray-600 justify-between items-center">
            <button className="btn_login">Sign Up</button>
            <Link href="/auth" className="link_text">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
