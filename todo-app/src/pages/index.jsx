import { Input } from "@/components/Input";
import { Button } from "@/components/Buttons";
import { Task } from "@/components/Task";
import { useState } from "react";

const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    const newTask = {
      value: inputValue,
      id: Date.now(),
      isDone: false,
    };
    setTodoList((previous) => [newTask, ...previous]);
  };

  return (
    <div className="flex justify-center bg-gray-50 h-screen w-full pt-[60]">
      {/* <div>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleSubmit} />
          <button type="submit">add</button>
        </form>
      </div> */}
      <div
        id="board-container"
        className="w-[377] h-[290] drop-shadow-md bg-white rounded-md   flex flex-col items-center px-4 py-6"
      >
        <div id="containers" className="w-[345] h-[187] flex gap-8 flex-col">
          <div id="container" className="w-[345] h-[138] flex gap-5 flex-col">
            <p className="w-[345] h-7 text-xl font-semibold flex justify-center">
              To-Do list
            </p>
            {/* <Input /> */}
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
            <Task />

            {/* <Button /> */}
          </div>
          {/* <div className="flex justify-center text-sm text-[#6B7280]">
            No tasks yet. Add one above!
          </div> */}
        </div>
        {/* <div
          id="footer"
          className="w-[345] h-[15] flex gap-1 justify-center text-xs pt-10"
        >
          <p className="text-[#6B7280]">Powered by</p>
          <p className="text-[#3B73ED]">Tok</p>
        </div> */}
      </div>
    </div>
  );
};
export default Home;
