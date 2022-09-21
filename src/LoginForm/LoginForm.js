import Button from "components/Button/Button";
import Input from "components/Input/Input";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div>
      <Input input_id="username" label="Username" required={true} type="text"/>
      <Input input_id="password" label="Password" required={true} type="password" />
      <Input input_id="remember" label="Remember me" required={false} type="checkbox" reverse={true}/>
      <Button active={true} text={"Submit"}/>
    </div>
  );
};

export default LoginForm;
