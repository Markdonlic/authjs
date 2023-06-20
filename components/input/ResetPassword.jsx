import Image from "next/image";
import Link from "next/link";

const ResetPassword = () => {
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
          <p className="text-gray-400 text-sm">Reset password</p>
        </div>
        <form className="flex flex-col w-full gap-2">
          <label className="flex items-center w-full">
            <input
              name="username"
              className="input_reset"
              type="text"
              placeholder="Username or Email address"
            />
            <button type="submit" className="btn_reset">
              Verify
            </button>
          </label>
          <label className="flex items-center w-full">
            <input
              name="username"
              className="input_reset"
              type="text"
              placeholder="OTP"
            />
            <button type="submit" className="btn_reset">
              Send
            </button>
          </label>
          <label className="flex-col w-full">
            <input
              name="password"
              className="input_signin"
              type="text"
              placeholder="New Password"
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
          <label className="flex items-center justify-start gap-2 mt-2 text-xs px-2">
            <input name="check" type="checkbox" />
            <span>Skip login</span>
          </label>
          <div className="flex mt-2 w-full text-sm text-gray-600 justify-between items-center">
            <button className="btn_login">Change Password</button>
            <span>
              <Link href="/auth" className="link_text">
                Sign In
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

export default ResetPassword;
