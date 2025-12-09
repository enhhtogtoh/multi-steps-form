import React from "react";

export const Task = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="w-[345] h-[62] rounded-md bg-[#F9FAFB] flex flex-row justify-between items-center p-4">
        <div
          className="flex gap-[10] justify-center items-center
        "
        >
          <input type="checkbox" />
          <p>Create PR 2</p>
        </div>
        <button className="w-[67] h-[30] rounded-md bg-[#FEF2F2] text-[#ef4444] flex justify-center items-center">
          Delete
        </button>
      </div>
      <div className="w-[345] h-[62] rounded-md bg-[#F9FAFB] flex flex-row justify-between items-center p-4">
        <div
          className="flex gap-[10] justify-center items-center
        "
        >
          <input type="checkbox" />
          <p>Create PR 2</p>
        </div>
        <button className="w-[67] h-[30] rounded-md bg-[#FEF2F2] text-[#ef4444] flex justify-center items-center">
          Delete
        </button>
      </div>
      <div className="w-[345] h-[62] rounded-md bg-[#F9FAFB] flex flex-row justify-between items-center p-4">
        <div
          className="flex gap-[10] justify-center items-center
        "
        >
          <input type="checkbox" />
          <p>Create PR 2</p>
        </div>
        <button className="w-[67] h-[30] rounded-md bg-[#FEF2F2] text-[#ef4444] flex justify-center items-center">
          Delete
        </button>
      </div>
    </div>
  );
};
