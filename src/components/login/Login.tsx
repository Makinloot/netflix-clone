import Button from "../button/Button";
import "./Login.scss";

const Login = () => {
  return (
    <div className="Login">
      <h3>sign in</h3>
      <Button value="sign in" className="btn-auth" />
    </div>
  );
};

export default Login;
