import "./Input.css";

const Input = (props) => {
  if (props.reverse) {
    return (
      <div className={props.className}>
          <input type={props.type} id={props.input_id} name={props.name} defaultChecked/>
          <label htmlFor={props.input_id} className={props.required ? "required" : ""}>{props.label}</label>
      </div>
  
    );
  } else {
    return (
      <div className={props.className}>
        <label htmlFor={props.input_id} className={props.required ? "required" : ""}>{props.label}</label>
        <input type={props.type} id={props.input_id} name={props.name}/>
      </div>
    ); 
  }
};

export default Input;