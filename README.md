# React ChakraUI Zustand Starter

This is a starter template for a React application using ChakraUI, Zustand, React Query, React Router, and the FakeStoreAPI.

## Features

- Fetches product data from the [FakeStoreAPI](https://fakestoreapi.com/products) using React Query.
- Manages shopping cart state with Zustand.
- Implements routing using React Router.
- Utilizes ChakraUI for styling and components.

## Prerequisites

- Node.js (version 20.2.0)
- npm (version 9.6.6)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/daudln/e-shop
   ```

2. Navigate to the project directory:

   ```bash
   cd e-shop
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and visit `http://localhost:5173` to see the application.

## Folder Structure

The project structure is organized as follows:

```
├── public
│
├── src
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── services
│   ├── store
│   ├── data
│   ├── utils
│   ├── App.tsx
├── ...
│   ├── index.html
├── README.md
└── ...
```


- `src`: Contains the source code of the application.
  - `components`: Reusable components used throughout the application.
  - `hooks`: Custom hooks used in the application.
  - `pages`: Individual page components for routing.
  - `services`: API services for fetching data.
  - `store`: Zustand store and related logic.
  - `utils`: Utility functions.
  - `App.tsx`: The main component that renders the application.
  - `main.tsx`: The entry point of the application.

## Dependencies

The project relies on the following dependencies:

- React: A JavaScript library for building user interfaces.
- ChakraUI: A simple, modular, and accessible component library for React.
- Zustand: A small, fast, and scalable state management library for React.
- React Query: A data-fetching library for managing and synchronizing server state in React applications.
- React Router: A library for declarative routing in React applications.

## Contributing

Contributions are welcome! If you find any issues or would like to suggest improvements, please create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---
