import "./Button.css";

const Button = ({ active, text, ...btnProps }) => {
  return (
    <button
      className={active ? "button button-active" : "button"}
      {...btnProps}
    >
      {text}
    </button>
  );
};

export default Button;
