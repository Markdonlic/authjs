import Link from "next/link";

export const metadata = {
  title: {
    absolute: "User",
  },
};
const UserProfile = () => {
  return (
    <div className="px-6 flex flex-col gap-4 justify-center items-center">
      <h1 className="font-semibold text-lg capitalize">Overview</h1>
      <div className="max-w-lg text-sm md:text-base px-8 py-6 rounded-2xl bg-green-500">
        <p className="text-gray-100 text-justify">
          Account verification successful...!!!,
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam nam
          error, aut id assumenda ipsam.
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          corporis nam nesciunt eligendi quam omnis in culpa obcaecati debitis.
          eum.
          <br />
          <br />
          Thanks.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
