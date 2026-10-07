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

## Live Link
https://dev-stack-builder-app.netlify.app/
