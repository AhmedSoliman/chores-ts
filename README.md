# chores-ts

Skeleton TypeScript project for managing personal chores and todos. This repo provides a basic Express server, linting, testing, and formatting defaults.

## Scripts

- `npm run build` – compile TypeScript to JavaScript
- `npm start` – run the compiled server
- `npm run dev` – run the server with automatic reload (ts-node-dev)
- `npm test` – run tests with Jest
- `npm run lint` – lint source files with ESLint

## Project Structure

```
src/        Source TypeScript files
tests/      Jest test files
```

## Getting Started

Install dependencies and start the development server:

```
npm install
npm run dev
```

The API currently exposes `GET /tasks` which returns an empty task list.
