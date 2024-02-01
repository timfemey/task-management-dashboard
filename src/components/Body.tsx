"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import TaskStatusHeader from "./TaskStatusHeader";
import { Todo, useAddTask, useTaskStatusStore } from "@/store/store";
import Modal from "./Modal";
import Task from "./Task";

type Props = {};

const Body = (props: Props) => {
  const taskStausStore = useTaskStatusStore();
  const taskStore = useAddTask();
  const [open, setOpen] = useState(false);

  let [list, setList] = useState<Todo[]>(taskStore.todos);
  useEffect(() => {
    switch (taskStausStore.status) {
      case "All":
        setList(taskStore.todos);
        break;
      case "Completed":
        const curr1 = taskStore.todos.filter((a) => a.status == "Completed");
        setList(curr1);
        break;
      case "In Progress":
        const curr2 = taskStore.todos.filter((a) => a.status == "In Progress");
        setList(curr2);
        break;

      case "Pending":
        const curr3 = taskStore.todos.filter((a) => a.status == "Pending");
        setList(curr3);
        break;

      default:
        setList(taskStore.todos);
        break;
    }
  }, [taskStausStore.status, taskStore.length, taskStore.todos]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-8 sm:mb-14">
        <h2 className="text-2xl font-semibold">
          All The{" "}
          {taskStausStore.status === "Pending"
            ? "Pending"
            : taskStausStore.status === "In Progress"
            ? "In Progress"
            : taskStausStore.status === "Completed"
            ? "Completed"
            : ""}{" "}
          Tasks
        </h2>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex w-full justify-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 sm:ml-3 sm:w-auto"
        >
          Add Task
        </button>
      </div>

      <TaskStatusHeader />
      <Modal open={open} stateUpdater={setOpen} />

      <div className="flex flex-col gap-2 px-4 py-5 max-h-[600px] overflow-auto">
        <ul>
          {list?.map((task, i) => (
            <Task
              key={i}
              id={i}
              title={task.title}
              description={task.description}
              status={task.status}
              date={task.date}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Body;
