const Input = (props) => {
  if (props.reverse) {
    return (
      <div>
          <input type={props.type} id={props.input_id} />
          <label for={props.input_id} className={props.required ? "required" : ""}>{props.label}</label>
      </div>
  
    );
  } else {
    return (
      <div>
        <label for={props.input_id} className={props.required ? "required" : ""}>{props.label}</label>
        <input type={props.type} id={props.input_id} />
      </div>
    ); 
  }
};

export default Input;
