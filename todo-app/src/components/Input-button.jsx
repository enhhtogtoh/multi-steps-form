export const Input = () => {
  return (
    <div id="input-container " className="w-[345] h-[38] flex gap-[6] ">
      <input
        type="text"
        placeholder="Add a new task..."
        className="border rounded-md w-[280] h-[40] border-gray-100 pl-[16] "
      />
      <button
        className="w-[59] h-[40] py-2 px-4 bg-[#3C82F6]  rounded-md text-white"
        type="submit"
      >
        Add
      </button>
    </div>
  );
};
