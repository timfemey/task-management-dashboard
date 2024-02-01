import { useTaskStatusStore } from "@/store/store";
import Link from "next/link";
import React from "react";

type Props = {};

const TaskStatusHeader = (props: Props) => {
  const taskStore = useTaskStatusStore();

  return (
    <div>
      <div className="mb-4">
        <ul className="flex flex-wrap gap-1 sm:gap-4 justify-center text-sm sm:text-base font-medium text-center text-slate-500 border-b border-slate-200 ">
          <Link
            onClick={() => {
              taskStore.update("All");
            }}
            href="/"
            className={`${
              taskStore.status === "All" && "bg-yellow-200 text-slate-900 "
            } inline-block px-4 sm:px-14 py-2 rounded focus:outline-none`}
          >
            All
          </Link>

          <Link
            onClick={() => {
              taskStore.update("Pending");
            }}
            href="/?tasks=pending"
            className={`${
              taskStore.status === "Pending" && "bg-yellow-200 text-slate-900 "
            } inline-block px-4 sm:px-14 py-2 rounded focus:outline-none`}
          >
            Pending
          </Link>

          <Link
            onClick={() => {
              taskStore.update("In Progress");
            }}
            href="/?tasks=in_progress"
            className={`${
              taskStore.status === "In Progress" &&
              "bg-yellow-200 text-slate-900 "
            } inline-block px-4 sm:px-14 py-2 rounded focus:outline-none`}
          >
            In Progress
          </Link>

          <Link
            onClick={() => {
              taskStore.update("Completed");
            }}
            href="/?tasks=completed"
            className={`${
              taskStore.status === "Completed" &&
              "bg-yellow-200 text-slate-900 "
            } inline-block px-4 sm:px-14 py-2 rounded focus:outline-none`}
          >
            Completed
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default TaskStatusHeader;
