# React Pagination

A simple **React.js Pagination** project that demonstrates how to display data in multiple pages. When the user clicks on a pagination button, the application displays a specific range of data, such as **0–10, 10–20, 20–30**, and so on.

## 🚀 Features

* Display data in a paginated format
* Show **10 items per page**
* Navigate between pages using pagination buttons
* Dynamically update the displayed data based on the selected page
* Simple and responsive UI
* Built using React functional components and hooks

## 🛠️ Technologies Used

* React.js
* JavaScript
* HTML
* CSS
* Vite

## 📌 How Pagination Works

The application divides the available data into multiple pages.

For example, if there are 100 items:

| Page | Data   |
| ---- | ------ |
| 1    | 0–10   |
| 2    | 10–20  |
| 3    | 20–30  |
| 4    | 30–40  |
| 5    | 40–50  |
| ...  | ...    |
| 10   | 90–100 |

When the user clicks a pagination button, the corresponding set of data is displayed.

## 📂 Project Structure

```text
Pagination-React/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Go to the project directory:

```bash
cd Pagination-React
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will run locally at:

```text
http://localhost:5173
```

## 🧠 Learning Goals

This project was created to practice:

* React state management
* `useState`
* Array methods
* Data slicing
* Event handling
* Conditional rendering
* Pagination logic
* Component-based development

## 📖 Pagination Logic

The basic idea is to calculate which portion of the data should be displayed based on the current page.

```js
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

const currentData = data.slice(startIndex, endIndex);
```

For example:

```text
currentPage = 1
itemsPerPage = 10

startIndex = 0
endIndex = 10

Result → data 0–10
```

For page 2:

```text
currentPage = 2

startIndex = 10
endIndex = 20

Result → data 10–20
```

## 🎯 Purpose

The purpose of this project is to understand how pagination works in React and how a large dataset can be divided into smaller sections for better usability and performance.

## 👨‍💻 Author

**Sameer Khan**

Frontend Developer | React.js | Next.js
