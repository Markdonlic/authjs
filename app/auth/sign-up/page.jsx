import Signup from "@/components/input/SignUp";
import Link from "next/link";

export const metadata = {
  title: {
    absolute: "User Sign up",
  },
};

const SignUp = () => {
  return (
    <section className="flex flex-col justify-center items-center h-96">
      <Signup />
    </section>
  );
};

export default SignUp;
