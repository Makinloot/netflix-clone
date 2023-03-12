import Welcome from "../components/welcome/Welcome";
import AuthForm from "../components/login/AuthForm";


import { registerInputData, loginInputData } from "../data";

const Auth = () => {
  return (
    <div className="Auth">
      <Welcome />
      {/* <AuthForm inputs={registerInputData} authType="sign up" /> */}
      <AuthForm inputs={loginInputData} authType="sign in" />
    </div>
  );
};

export default Auth;
