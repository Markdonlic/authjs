
import MessageNotification from "@/components/dialog/MessageNotification";
import ContactForm from "@/components/input/ContactForm";
import Link from "next/link";
import React from "react";

const ContactUsers = () => {
  return (
    <div className="w-full px-6 flex flex-col gap-4 justify-center items-center">
      <h1 className="font-semibold text-lg capitalize">contact admin</h1>
      <div className="w-full rounded-2xl text-xs shadow-xl dark:shadow-none dark:bg-neutral-800 px-4 py-4">
        <div className="flex justify-between border-b-[1px] border-gray-500 pb-2">
          <p className="text-gray-100 text-justify text-xs">Recent Messages</p>
          <Link href="/" className="text-sky-600">
            show all
          </Link>
        </div>
        <div className="py-3 overflow-hidden gap-3 flex flex-col w-full justify-start">
          <MessageNotification />
          <MessageNotification />
          <MessageNotification />
          <MessageNotification />
          <MessageNotification />
          <MessageNotification />
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactUsers;
