import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: {
    absolute: "Admin",
  },
};
export default function Home() {
  return (
      <section className="w-full h-[100vh] py-24 flex flex-col justify-center items-center">
        <div className="grid sm:grid-cols-7 lg:grid-cols-5 xl:grid-cols-3  sm:max-w-7xl justify-center items-center mx-auto gap-10 sm:px-5 px-6 md:px-10">
          <div className="sm:hidden max-w-lg mx-auto">
            <Image
              width={768}
              height={581}
              alt="banner"
              src="/images/auth-cover1.png"
              className="object-contain"
            />
          </div>
          <div className="sm:col-span-3 lg:col-span-2 xl:col-span-1 flex flex-col justify-center items-start">
            <div className="flex flex-col justify-center items-start gap-4">
              <h1 className="home_title_text">
                Authentication <br />
                Methods
              </h1>
              <p className="home_desc_test">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus.
              </p>
              <Link className="btn_login md:text-sm" href="/">
                Sign up
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex sm:justify-end sm:items-center sm:col-span-4 lg:col-span-3 xl:col-span-2 w-full">
            <div className="flex justify-start">
              <Image
                width={768}
                height={581}
                alt="banner"
                src="/images/auth-cover1.png"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
  );
}
