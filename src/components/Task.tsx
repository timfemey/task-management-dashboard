import { useAddTask } from "@/store/store";
import React from "react";
import { Trash2 } from "react-feather";

type Props = {
  id: number;
  title: string;
  description: string;
  status: "All" | "Pending" | "In Progress" | "Completed";
  date: any;
};

const Task = (props: Props) => {
  const todo = props;

  const taskStore = useAddTask();
  return (
    <li className="mb-4 p-4 border rounded-md">
      <h2 className="text-lg font-semibold">{todo.title}</h2>
      <p className="text-gray-600 mb-2">Description: {todo.description}</p>
      <div className="flex items-center mb-2">
        <span className="text-gray-700 mr-2">Status:</span>
        <span
          className={`${
            todo.status === "Completed" ? "text-green-600" : "text-yellow-600"
          } font-semibold`}
        >
          {todo.status}
        </span>
      </div>
      <div className="flex items-center">
        <span className="text-gray-700 mr-2">Date:</span>
        <span className="text-blue-600 font-semibold">{todo.date}</span>
      </div>
      <button
        onClick={() => {
          taskStore.deleteTodo(todo.id);
        }}
        className="pt-2 text-gray-600 hover:text-red-500"
      >
        <Trash2 />
      </button>
    </li>
  );
};

export default Task;
