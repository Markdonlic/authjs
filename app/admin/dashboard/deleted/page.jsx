
import Table from "@/components/dialog/Table";
const DeletedPage = () => {
  return (
    <div className="w-full flex flex-col gap-6 justify-center items-start">
      <h1 className="font-semibold text-lg capitalize">deleted accounts</h1>
      <Table />
    </div>
  );
};

export default DeletedPage;
