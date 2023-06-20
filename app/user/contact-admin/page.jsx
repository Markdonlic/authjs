
import ContactForm from "@/components/input/ContactForm";
import React from "react";

const UserContactAdmin = () => {
  return (
    <div className="px-6 flex flex-col gap-4 justify-center items-center">
      <h1 className="font-semibold text-lg capitalize">contact admin</h1>
      <ContactForm />
    </div>
  );
};

export default UserContactAdmin;
