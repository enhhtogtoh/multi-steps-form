import { useState } from "react";

export const Input = ({ updateTask, taskListValue }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
      isCompleted: false,
    };

    updateTaskList([newTask, ...taskListValue]);
    setInputValue("");
  };

  return (
    <div id="input-container " className="w-[345] h-[38] flex gap-[6] ">
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Add a new task..."
        className="border rounded-md w-[280] h-[40] border-gray-100 pl-[16] "
      />
      <button
        onClick={handleSubmit}
        className="w-[59] h-[40] py-2 px-4 bg-[#3C82F6]  rounded-md text-white"
        type="submit"
      >
        Add
      </button>
    </div>
  );
};
