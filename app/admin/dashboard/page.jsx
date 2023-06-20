import MessageNotification from "@/components/dialog/MessageNotification";
import Link from "next/link";

const AdminProfile = () => {
  return (
    <div className="w-full flex flex-col gap-6 justify-center items-center">
      <div className="w-full grid grid-cols-2 xl:grid-cols-6 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r shadow-xl dark:shadow-none bg-white text-black rounded-xl dark:from-neutral-900 dark:via-neutral-600 dark:from-40% dark:to-100% px-4 py-5 flex flex-col dark:text-gray-100 text-justify flex-1">
          <p className="text-gray-400 text-xs capitalize">total users</p>
          <p className="text-gray-500 dark:text-gray-200 text-2xl font-semibold">
            15,097
          </p>
          <p className="text-green-600 text-[11px]">
            <span>Icon </span>+32.45%
          </p>
        </div>
        <div className="bg-gradient-to-r shadow-xl dark:shadow-none bg-white text-black rounded-xl dark:from-neutral-900 dark:via-neutral-600 dark:from-40% dark:to-100% px-4 py-5 flex flex-col dark:text-gray-100 text-justify flex-1">
          <p className="text-gray-400 text-xs capitalize">new users</p>
          <p className="text-gray-500 dark:text-gray-200 text-2xl font-semibold">
            2,097
          </p>
          <p className="text-red-600 text-[11px]">
            <span>Icon </span>-32.45%
          </p>
        </div>
        <div className="bg-gradient-to-r shadow-xl dark:shadow-none bg-white text-black rounded-xl dark:from-neutral-900 dark:via-neutral-600 dark:from-40% dark:to-100% px-4 py-5 flex flex-col dark:text-gray-100 text-justify flex-1">
          <p className="text-gray-400 text-xs capitalize">approved users</p>
          <p className="ttext-gray-500 dark:text-gray-200 text-2xl font-semibold">
            3,297
          </p>
          <p className="text-green-600 text-[11px]">
            <span>Icon </span>+32.45%
          </p>
        </div>
        <div className="bg-gradient-to-r shadow-xl dark:shadow-none bg-white text-black rounded-xl dark:from-neutral-900 dark:via-neutral-600 dark:from-40% dark:to-100% px-4 py-5 flex flex-col dark:text-gray-100 text-justify flex-1">
          <p className="text-gray-400 text-xs capitalize">suspended users</p>
          <p className="text-gray-500 dark:text-gray-200 text-2xl font-semibold">
            97
          </p>
          <p className="text-green-600 text-[11px]">
            <span>Icon </span>+32.45%
          </p>
        </div>
        <div className="bg-gradient-to-r shadow-xl dark:shadow-none bg-white text-black rounded-xl dark:from-neutral-900 dark:via-neutral-600 dark:from-40% dark:to-100% px-4 py-5 flex flex-col dark:text-gray-100 text-justify flex-1">
          <p className="text-gray-400 text-xs capitalize">blocked users</p>
          <p className="text-gray-500 dark:text-gray-200 text-2xl font-semibold">
            527
          </p>
          <p className="text-green-600 text-[11px]">
            <span>Icon </span>+32.45%
          </p>
        </div>
        <div className="bg-gradient-to-r shadow-xl dark:shadow-none bg-white text-black rounded-xl dark:from-neutral-900 dark:via-neutral-600 dark:from-40% dark:to-100% px-4 py-5 flex flex-col dark:text-gray-100 text-justify flex-1">
          <p className="text-gray-400 text-xs capitalize">messages</p>
          <p className="text-gray-500 dark:text-gray-200 text-2xl font-semibold">
            4,709
          </p>
          <p className="text-green-600 text-[11px]">
            <span>Icon </span>+32.45%
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto text-xs md:text-sm">
        <div className="md:col-span-2 rounded-2xl text-xs shadow-xl dark:shadow-none dark:bg-neutral-800 px-4 py-4">
          <div className="flex justify-between items-center border-b-[1px] border-gray-500 pb-2">
            <p className="dark:text-gray-100 text-base font-semibold text-justify">
              Recent Messages
            </p>
            <Link
              href="/admin/dashboard/messages"
              className="text-sky-600 text-sm"
            >
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
        <div className="px-0 py-0">
          <div className="rounded-2xl shadow-xl dark:shadow-none dark:bg-neutral-800 px-4 py-4">
            <div className="border-b-[1px] border-gray-500 pb-2">
              <p className="dark:text-gray-100 text-base font-semibold">
                Statistics
              </p>
            </div>
            <p className="dark:text-gray-100 text-justify text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
              nam error, aut id assumenda ipsam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
