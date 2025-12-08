import { Input } from "@/components/Input-button";
import { Button } from "@/components/Buttons";

import { useState } from "react";
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    const newTask = {
      value: inputValue,
      id: Date.now(),
      isDone: false,
    };

    setTodos((previous = [newTask, ...previous]));
  };
  return (
    <div className="flex justify-center bg-gray-50 h-screen w-full pt-[60]">
      <div>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleChange} />
          <button type="submit">add</button>
        </form>
      </div>
      <div
        id="board-container"
        className="w-[377] h-[290] drop-shadow-md bg-white rounded-md   flex flex-col items-center px-4 py-6"
      >
        <div id="containers" className="w-[345] h-[187] flex gap-8 flex-col">
          <div id="container" className="w-[345] h-[138] flex gap-5 flex-col">
            <p className="w-[345] h-7 text-xl font-semibold flex justify-center">
              To-Do list
            </p>
            <Input />

            <Button />
          </div>
          <p className="flex justify-center text-sm text-[#6B7280]">
            No tasks yet. Add one above!
          </p>
        </div>
        <div
          id="footer"
          className="w-[345] h-[15] flex gap-1 justify-center text-xs pt-10"
        >
          <p className="text-[#6B7280]">Powered by</p>
          <p className="text-[#3B73ED]">Pinecone Academy</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
