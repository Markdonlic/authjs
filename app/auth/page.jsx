import Link from "next/link";
import SignIn from "@/components/input/SignIn";

export const metadata = {
  title: {
    absolute: "User Authentication",
  },
};

const Auth = () => {
  return (
    <section className="flex flex-col justify-center items-center h-96">
      <SignIn />
    </section>
  );
};

export default Auth;
