
import Table from "@/components/dialog/Table";
import React from "react";

const Previewpage = () => {
  return (
    <div className="w-full flex flex-col gap-6 justify-center items-start">
      <h1 className="font-semibold text-lg capitalize">
        users account details
      </h1>
      <Table />
    </div>
  );
};

export default Previewpage;
