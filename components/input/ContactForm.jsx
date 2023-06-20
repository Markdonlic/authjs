import Link from "next/link";
import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full flex item-center justify-center">
      <div className="w-96">
        <form className="flex flex-col w-full gap-2">
          <label className="flex-col w-full">
            <input
              name="username"
              className="input_text"
              type="text"
              disabled
              placeholder="Username"
            />
          </label>
          <label className="flex-col w-full">
            <input
              name="message-title"
              className="input_text"
              type="text"
              placeholder="Message Title"
            />
          </label>
          <label className="flex-col w-full">
            <textarea
              name="message"
              className="input_text"
              placeholder="Message body..."
              rows={5}
            />
          </label>
          <div className="flex mt-2 w-full text-sm text-gray-600 justify-end items-center gap-2">
            <Link href="/demo" className="btn_login">
              Reset
            </Link>
            <button className="btn_login">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
