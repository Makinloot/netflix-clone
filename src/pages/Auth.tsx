import Welcome from "../components/welcome/Welcome";
import AuthForm from "../components/login/AuthForm";

import { registerInputData, loginInputData } from "../data";

const Auth: React.FC<{
  signup: boolean;
}> = ({ signup }) => {
  return (
    <div className="Auth">
      <Welcome />
      {signup ?
        <AuthForm inputs={registerInputData} authType="sign up" />
        :
        <AuthForm inputs={loginInputData} authType="sign in" />
      }
    </div>
  );
};

export default Auth;
