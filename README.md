# Dev Stack

<div align="center">

![Dev Stack banner](src/assets/banner-stack.png)

### Build a technology stack that fits your next project

Dev Stack is a polished, interactive technology explorer for developers. Browse a curated catalog of frontend, backend, database, language, styling, DevOps, and tooling options, then assemble a personal stack in a few clicks.

</div>

## Features

- **Explore a curated catalog:** Review each technology's category, description, difficulty level, rating, icon, and helpful badge.
- **Build a personal stack:** Add technologies to the "Your Stack" panel and see your selections collected in one place.
- **Manage selections with feedback:** Remove individual technologies or clear the entire stack, with responsive toast notifications confirming each action.

## Technologies Used

- **React 19** for the component-based user interface and state management
- **Vite** for fast local development and production builds
- **Tailwind CSS 4** for responsive utility-first styling
- **React Toastify** for success and removal notifications
- **React Suspense** for the asynchronous technology catalog loading state
- **JSON** as the local data source for the technology catalog

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL shown in your terminal to view the application.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create an optimized production build |

## Project Structure

```text
src/
├── components/       # Navbar, banner, technology cards, stack panel, loader, and footer
├── assets/            # Project logo and banner artwork
├── App.jsx            # Main application composition and data loading
└── index.css         # Global styles and Tailwind CSS entry point
public/
└── data.json         # Technology catalog data
```

## Data

Technology entries are stored in [`public/data.json`](public/data.json), making the catalog easy to update without changing the UI components. Each entry includes its name, category, description, icon, rating, difficulty, and badge.

-------------------------------

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write **HTML-like code inside JavaScript**.

It makes React code easier to write and understand.

### 2. What is the difference between props and state?

**Props** are data passed from a **parent to a child** component. They are read-only.

**State** is data managed **inside a component** and can change.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to **store and update data** in a component.

In this project, it is used in `TechnologyList` to store the available technologies and the technologies selected for the user's stack. It is also used in `Navbar` to control the mobile menu.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs some code when a component **loads or changes**. It is commonly used for side effects such as fetching data.

This project does not use `useEffect` to load the JSON data. Instead, `App` fetches `public/data.json` and passes the resulting promise to `TechnologyList`, which uses React `Suspense` and a loader while the data is being resolved.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React **identify each item in the list**.

It helps React update the list correctly and efficiently when something changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means **showing something only when a condition is true**.

For example, the project displays an empty message when no technologies have been selected:

```jsx
{selectedStack.length === 0 && (
	<div className="stack-empty-box">Your stack is empty.</div>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

We pass data from a parent to a child using **props**.

For example, `TechnologyList` passes the selected technologies and handler functions to `MyStack`:

```jsx
<MyStack
	selectedStack={selectedStack}
	handleRemoveMyStack={handleRemoveMyStack}
	handleRemoveAll={handleRemoveAll}
/>
```

The child can send something back by calling a **function passed through props**. In this project, `MyStack` calls `handleRemoveMyStack` when a user removes a technology, and the parent updates the state.
