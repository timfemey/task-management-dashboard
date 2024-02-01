# Task Management Dashboard

This is a task management application built with Next.js, TypeScript, Tailwind CSS, and Zustand(State Management). It allows users to create, view and delete tasks. The application utilizes local storage for data persistence.

## Visit Site

https://task-management-6d7ea.web.app/

## Features

- View a list of tasks
- Add a new task
- Delete a task

## Technologies Used

- Next.js: A React framework for building server-side rendered applications.
- TypeScript: A statically-typed superset of JavaScript that improves code maintainability and reliability.
- Tailwind CSS: A utility-first CSS framework for styling and layout.
- Zustand: A small, fast and scalable state management solution.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/timfemey/task-management-dashboard.git
   ```

2. Navigate to the project directory:

   ```bash
   cd task-management-dashboard
   ```

3. Install the dependencies:

   ```bash
   npm i
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the application.

## Folder Structure

The project's folder structure is as follows:

```bash
- src
  -app
    - favicon.ico
    - globals.css
    - layout.tsx
    - page.tsx
  - components
    - Body.tsx
    - Task.tsx
    - TaskStatusHeader.tsx
    - Header.tsx
    - Modal.tsx
    ..
  - stores
    - store.ts

```

Explanation:

- `src`: The root directory of the project's source code.

  - `app`: This directory contains the core components and configurations for the Next.js application.
    - `favicon.ico`: The favicon file for the application.
    - `layout.tsx`: The layout component that wraps the pages and provides a consistent structure and styling.
    - `page.tsx`: The main page component representing the home or main view of the application.
  - `components`: Contains reusable components used across different pages or layouts.

    - `Body.tsx`: Component responsible for the Dashboard Body and Showcasing the Tasks.
    - `Header.tsx`: Component responsible for the Header.
    - `Task.tsx`: Component responsible for displaying a single task.
    - `TaskStatusHeader.tsx`: Component responsible for displaying tasks based on their status.
    - `Modal.tsx`: Component responsible for Modal to Create a Task.
    - ...

  - ...
  - `stores`: Contains files related to state management using Zustand.
    - `store.ts`: Responsible for managing state of application
    - ...
  - `public`: Contains publicly accessible files, such as images or static assets, that can be used in the application.

## Persistence

The application persists task data using local storage.

## License

This project is licensed under the [MIT License](LICENSE).

---

Please let me know if you need any further information or assistance.
