// import logo from "./logo.svg";
// import "./App.css";

// Se requiere para casos cuando no se usa JSX y se hacen a mano cada componente con React.createElement();
// import React from "react";

import Expenses from "./components/Expenses/Expenses";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>¡Comenzamos!</h1>
//         <p>También será visible</p>
//         <ExpenseItem></ExpenseItem>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // Nota: En lugar de JSX se puede usar:
  // 3 argumentos
  //   1- El elemento que se va a crear
  //   2.- Obj que configura todos los atributos del elemento, puede ser un objecto vacío {}
  // 3.- Contenido entre tags inicial y final. En el siguiente ejemplo se van a crear 2 elementos un h1 y un p
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "¡Comenzamos!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div className="App">
      <header className="App-header">
        <h1></h1>
        <p>También será visible</p>
        <Expenses items={expenses} />

        {/* Nota: Se utiliza el componente <Expenses en lugar de los 4 items <ExpenseItem */}
        {/* <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        /> */}
      </header>
    </div>
  );
};

export default App;
