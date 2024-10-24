# Charts Application

This project is a web application built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [TypeScript](https://www.typescriptlang.org/) that showcases different types of charts, including bar charts, stacked bar charts, pie charts, and line charts using [Recharts](https://recharts.org/).

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Linting & Formatting](#linting--formatting)

## Getting Started

To get started with the project, follow the instructions below:

### Prerequisites

Ensure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/) (version >= 16.x.x recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/cassianosm/charts.git
   cd charts
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

This will start a development server at http://localhost:5173 by default.

## Available Scripts

In the project directory, you can run the following scripts:

### `npm run dev`

Starts the development server with hot module replacement.

### `npm run build`

Builds the application for production. The output is located in the `dist/` folder.

### `npm run lint`

Runs ESLint on the project to check for code quality and style issues.

### `npm run preview`

Locally preview the production build.

## Technologies Used

- **Vite** - Fast and modern build tool optimized for performance.
- **React** - JavaScript library for building user interfaces.
- **TypeScript** - Type-safe JavaScript with modern features.
- **Recharts** - Library for rendering charts in React.
- **Tailwind CSS** - Utility-first CSS framework for styling.
- **ESLint** - Linting tool for code quality.
- **Prettier** - Code formatting tool for consistency.

## Linting & Formatting

This project uses [ESLint](https://eslint.org/) for linting and [Prettier](https://prettier.io/) for code formatting.

You can run the linter with:

```bash
npm run lint
```
