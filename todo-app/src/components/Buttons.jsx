export const Button = () => {
  return (
    <div id="button-container" className="w-[345] h-8 flex gap-[6] ">
      <button className="w-[38] h-8 rounded-md py-1 px-3 bg-[#3C82F6] text-white text-xs">
        All
      </button>
      <button className="w-[60] h-8 rounded-md py-1 px-3 bg-[#F3F4F6] text-xs">
        Active
      </button>
      <button className="w-[87] h-8 rounded-md py-1 px-3 bg-[#F3F4F6] text-xs">
        Completed
      </button>
    </div>
  );
};
