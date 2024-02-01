import { useAddTask } from "@/store/store";
import React, { useState } from "react";

type Props = {
  open: boolean;
  stateUpdater: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = (props: Props) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<
    "All" | "Pending" | "In Progress" | "Completed"
  >("Pending");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const show = props.open;
  const update = props.stateUpdater;
  const taskStore = useAddTask();
  return (
    <div>
      {show ? (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Add New Task
                      </h3>
                      <div className="mt-2">
                        <div>
                          <label
                            htmlFor="title"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Title
                          </label>
                          <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                              type="text"
                              name="title"
                              id="title"
                              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="Task Title"
                              onBlur={(e) => setTitle(e.currentTarget.value)}
                            />
                          </div>
                        </div>

                        <div className="mt-2">
                          <label
                            className="block text-gray-600 text-sm font-semibold mb-2"
                            htmlFor="description"
                          >
                            Add Description:
                          </label>
                          <textarea
                            id="description"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            rows={4}
                            placeholder="Enter your description here..."
                            onBlur={(e) => setDesc(e.currentTarget.value)}
                          ></textarea>
                        </div>

                        <div>
                          <label
                            htmlFor="status"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Status
                          </label>
                          <div className="relative mt-2 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <span className="text-gray-500 sm:text-sm">
                                Status:
                              </span>
                            </div>
                            <input
                              type="button"
                              name="status"
                              id="status"
                              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder=""
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                              <label htmlFor="status" className="sr-only">
                                Status
                              </label>
                              <select
                                onChange={(e) => {
                                  const val = e.currentTarget.value;

                                  if (val == "All" || val == undefined) {
                                    setStatus("Pending");
                                  } else {
                                    setStatus(val as any);
                                  }
                                }}
                                id="status"
                                name="status"
                                className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                              >
                                <option>Pending</option>
                                <option>In Progress</option>
                                <option>Completed</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="due_date"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Due Date
                          </label>
                          <div className="relative mt-2 rounded-md shadow-sm">
                            <input
                              type="date"
                              name="due_date"
                              onChange={(e) => setDate(e.currentTarget.value)}
                              id="due_date"
                              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    onClick={() => {
                      if (
                        desc.trim().length > 3 ||
                        title.trim().length > 3 ||
                        date.trim().length > 3
                      ) {
                        taskStore.addTodo({
                          date: date,
                          description: desc,
                          title: title,
                          status: status,
                        });
                      } else {
                        alert("Invalid Values");
                      }

                      update(false);
                    }}
                    className="inline-flex w-full justify-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 sm:ml-3 sm:w-auto"
                  >
                    Add Task
                  </button>
                  <button
                    type="button"
                    onClick={() => update(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Modal;
