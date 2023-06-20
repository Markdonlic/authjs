import Link from "next/link";
import ResetPassword from "@/components/input/ResetPassword"
export const metadata = {
  title: {
    absolute: "Reset password",
  },
};

const ResetPasscode = () => {
  return (
    <section className="flex flex-col justify-center items-center h-96">
      <ResetPassword />
    </section>
  );
};

export default ResetPasscode;
