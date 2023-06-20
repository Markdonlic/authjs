import { GiCheckMark } from "react-icons/gi";
import { IoArrowUndoOutline } from "react-icons/io5";
import { BsFileEarmarkExcel } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineDelete, AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlinePending, MdBlock, MdOutlineRemoveRedEye } from "react-icons/md";
import { TbLockOff, TbLockOpen, TbLock } from "react-icons/tb";
const Table = () => {
  return (
    <div className="dark:bg-neutral-800 px-6 py-6 rounded-xl">
      <table className="dark:text-white">
        <thead>
          <tr>
            <td className="text-base font-semibold">Id</td>
            <td className="text-base font-semibold">Username</td>
            <td className="text-base font-semibold">Country</td>
            <td className="text-base font-semibold">Registered Date</td>
            <td className="text-base font-semibold">status</td>
            <td className="text-base font-semibold">Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>new_user</td>
            <td>United States</td>
            <td>2023-02-12</td>
            <td><span className={`bg-sky-400 text-xs py-1 px-2 rounded-full text-gray-100`}>verify</span></td>
            <td>
              <div className="text-base flex justify-center gap-2">
                <MdOutlineRemoveRedEye className="table_action_icon_preview" />
                <GiCheckMark className="table_action_icon_approve" />
                <TbLock  className="table_action_icon_suspended" />
                <MdBlock  className="table_action_icon_blocked" />
                <AiOutlineDelete className="table_action_icon_deleted" />
              </div>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>new_user</td>
            <td>United States</td>
            <td>2023-02-12</td>
            <td><span className={`bg-green-400 text-xs text-gray-100 py-1 px-2 rounded-full`}>approved</span></td>
            <td>
              <div className="text-base flex justify-center gap-2">
                <MdOutlineRemoveRedEye className="table_action_icon_preview" />
                <AiOutlineUsergroupAdd className="table_action_icon_verify" />
                <TbLock  className="table_action_icon_suspended" />
                <MdBlock  className="table_action_icon_blocked" />
                <AiOutlineDelete className="table_action_icon_deleted" />
              </div>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>new_user</td>
            <td>United States</td>
            <td>2023-02-12</td>
            <td><span className={`bg-yellow-500 text-xs text-gray-100 py-1 px-2 rounded-full`}>suspended</span></td>
            <td>
              <div className="text-base flex justify-center gap-2">
                <MdOutlineRemoveRedEye className="table_action_icon_preview" />
                <AiOutlineUsergroupAdd className="table_action_icon_verify" />
                <GiCheckMark className="table_action_icon_approve" />
                <MdBlock  className="table_action_icon_blocked" />
                <AiOutlineDelete className="table_action_icon_deleted" />
              </div>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>new_user</td>
            <td>United States</td>
            <td>2023-02-12</td>
            <td><span className={`bg-orange-500 text-xs text-gray-100 py-1 px-2 rounded-full`}>blocked</span></td>
            <td>
              <div className="text-base flex justify-center gap-2">
                <MdOutlineRemoveRedEye className="table_action_icon_preview" />
                <AiOutlineUsergroupAdd className="table_action_icon_verify" />
                <GiCheckMark className="table_action_icon_approve" />
                <TbLock  className="table_action_icon_suspended" />
                <AiOutlineDelete className="table_action_icon_deleted" />
              </div>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>new_user</td>
            <td>United States</td>
            <td>2023-02-12</td>
            <td><span className={`bg-red-500 text-xs text-gray-100 py-1 px-2 rounded-full`}>deleted</span></td>
            <td>
              <div className="text-base flex justify-center gap-2">
                <MdOutlineRemoveRedEye className="table_action_icon_preview" />
                <AiOutlineUsergroupAdd className="table_action_icon_verify" />
                <GiCheckMark className="table_action_icon_approve" />
                <TbLock  className="table_action_icon_suspended" />
                <MdBlock  className="table_action_icon_blocked" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
