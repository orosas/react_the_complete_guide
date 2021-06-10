import "./Card.css";

const Card = (props) => {
  // Nota: Se utiliza la siguiente const para definir la class en éste componente MÁS los enviados desde dondde se llama al componente
  const classes = "card " + props.className;

  // return <div className="card">{props.children}</div>;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
