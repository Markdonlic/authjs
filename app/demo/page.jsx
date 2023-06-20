import Link from "next/link";

export const metadata = {
  title: {
    absolute: "Demo",
  },
};
const DemoProfile = () => {
  return (
    <div className="px-6 flex flex-col gap-4 justify-center items-center">
      <h1 className="font-semibold text-lg capitalize">verify account</h1>
      <div className="max-w-sm text-sm md:text-base px-8 py-6 rounded-2xl bg-red-500">
        <p className="text-gray-100 pb-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, ex
          quaerat eligendi suscipit vel totam velit obcaecati sunt?
        </p>
        <ul
          style={{ listStyleType: "disc" }}
          className="indent-[-5px] pl-6 text-gray-200"
        >
          <li>International passport</li>
          <li>Driver's licence</li>
          <li>National Id card</li>
          <li>Voter's card</li>
          <li>Other valid document</li>
        </ul>
      </div>
      <div className="hidden max-w-lg text-xs md:text-sm px-8 py-6 rounded-2xl bg-sky-600">
        <p className="text-gray-100 text-center">
          Account under review...!!!,
          <br /> if no response after 24hrs of submission, please contact our
          customer care.
          <br />
          Thanks
        </p>
      </div>
      <div className="w-full flex item-center justify-center">
        <div className="max-w-96">
          <form className="flex flex-col w-full gap-2">
            <label className="flex-col w-full">
              <span className="text-xs text-neutral-500 dark:text-gray-100">
                Upload any valid id
              </span>
              <input
                name="country"
                className="cursor-pointer rounded-lg mt-2 w-full text-sm text-gray-200 border border-gray-400 bg-gray-50 dark:text-slate-400 focus:outline-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                type="file"
              />
            </label>
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
                name="full-name"
                className="input_text"
                type="text"
                placeholder="Full Name"
              />
            </label>
            <label className="flex-col w-full">
              <input
                name="phone-no"
                className="input_text"
                type="text"
                placeholder="Contact Number"
              />
            </label>
            <label className="flex-col w-full">
              <select name="country" className="input_text">
                <option value="">Country of Origin</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </label>
            <label className="flex-col w-full">
              <textarea
                name="contact-address"
                className="input_text"
                placeholder="Contact Address"
              />
            </label>
            <div className="flex mt-2 w-full text-sm text-gray-600 justify-end items-center gap-2">
              <Link href="/demo" className="btn_login">
                Reset
              </Link>
              <button className="btn_login">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DemoProfile;
