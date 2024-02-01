import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface useTaskStatusInterface {
    status: "All" | "Pending" | "In Progress" | "Completed"
    update: (newVal: "All" | "Pending" | "In Progress" | "Completed") => void
}

export interface Todo {
    title: string;
    description: string;
    status: "All" | "Pending" | "In Progress" | "Completed";
    date: string;
}

// Define the type for the store
interface TodoStore {
    todos: Todo[];
    length: number;
    addTodo: (todo: Todo) => void;
    updateTodo: (index: number, updatedTodo: Todo) => void;
    deleteTodo: (index: number) => void;
}


export const useTaskStatusStore = create<useTaskStatusInterface>()(persist((set) => ({
    status: "All",
    update: (newVal) => set((state) => ({ status: newVal }))


}), { name: "techmateai-task-management-status" }))

export const useAddTask = create<TodoStore>()(persist((set) => ({
    todos: [],

    length: 0,


    // Function to add a new todo
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),

    // Function to update a todo at a specific index
    updateTodo: (index, updatedTodo) =>
        set((state) => {

            const newTodos = [...state.todos];
            newTodos[index] = updatedTodo;
            state.length += 1
            return { todos: newTodos };
        }),

    // Function to delete a todo at a specific index
    deleteTodo: (index) =>
        set((state) => {

            const newTodos = [...state.todos];
            newTodos.splice(index, 1);
            state.length -= 1
            return { todos: newTodos };
        }),

}), { name: "techmateai-task-management-tasks" }))
