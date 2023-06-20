import Link from "next/link";

const ProfileSettings = () => {
  return (
    <div className="px-6 flex flex-col justify-center">
      <h1 className="font-semibold capitalize">Profile details</h1>
      <div className="flex flex-col py-4 justify-center">
        <table>
          <tbody>
            <tr>
              <td className="font-semibold dark:text-gray-200">Username</td>
              <td className=" dark:text-gray-300">new_user</td>
            </tr>
            <tr>
              <td className="font-semibold dark:text-gray-200">Email Address</td>
              <td className=" dark:text-gray-300">mail@mail.com</td>
            </tr>
            <tr>
              <td className="font-semibold dark:text-gray-200">Full Name</td>
              <td className=" dark:text-gray-300">John Doe</td>
            </tr>
            <tr>
              <td className="font-semibold dark:text-gray-200">Phone No.</td>
              <td className=" dark:text-gray-300">+1234567890</td>
            </tr>
            <tr>
              <td className="font-semibold dark:text-gray-200">Country</td>
              <td className=" dark:text-gray-300">Australia</td>
            </tr>
            <tr>
              <td className="font-semibold dark:text-gray-200">Contact Address</td>
              <td className=" dark:text-gray-300">No 1 new york avenue</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className="font-semibold capitalize pb-4">change password</h1>
      <div className="w-full flex item-center justify-center">
        <div className="w-96">
          <form className="flex flex-col w-full gap-2">
            <label className="flex-col w-full">
              <input
                name="old-password"
                className="input_text"
                type="password"
                placeholder="Old Password"
              />
            </label>
            <label className="flex-col w-full">
              <input
                name="new-password"
                className="input_text"
                type="password"
                placeholder="New Password"
              />
            </label>
            <label className="flex-col w-full">
              <input
                name="confirm-password"
                className="input_text"
                type="password"
                placeholder="Confirm Password"
              />
            </label>
            <div className="flex mt-2 w-full text-sm text-gray-600 justify-end items-center gap-2">
              <Link href="/demo" className="btn_login">
                Reset
              </Link>
              <button className="btn_login">Change Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
