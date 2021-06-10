import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  // Nota: Convierte str Mes a primera letra mayúscula
  const month =
    props.date
      .toLocaleString("es-MX", { month: "long" })
      .charAt(0)
      .toUpperCase() +
    props.date.toLocaleString("es-MX", { month: "long" }).slice(1);

  const day = props.date.toLocaleString("es-MX", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}, </div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
