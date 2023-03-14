import { FormEvent, useRef, useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import Button from "../button/Button";
import { AuthInputs } from "../../types";

import "./AuthForm.scss";
import InputField from "./InputField";

const AuthForm: React.FC<{
  inputs: AuthInputs[];
  authType: string;
}> = ({ inputs, authType }) => {
  // ref at index 0 is emailRef
  // ref at index 1 is passwordRef
  // ref at index 2 is confirmPasswordRef
  const refData = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const { handleSignup, handleLogin, currentUser, handleGmailAuth } = useAuth();

  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (
      authType === "sign up" &&
      refData[1].current?.value !== refData[2].current?.value
    ) {
      console.log("arada working");
      return setError("Passwords do not match");
    }

    try {
      const emailValue = refData[0].current?.value;
      const pswValue = refData[1].current?.value;
      setError("");
      setLoading(true);
      if (authType === "sign up") {
        await handleSignup(emailValue, pswValue);
        setSuccessMsg("Account was successfully created");
      } else {
        await handleLogin(emailValue, pswValue);
        navigate("/browse");
      }
    } catch (error: any) {
      if (error.code === "auth/user-not-found") setError("User not found.");
      else if (error.code === "auth/wrong-password")
        setError("Incorrect password.");
      else if (error.code === "auth/email-already-in-use")
        setError("Email already in use.");
      else setError("Something went wrong, please try again");
      console.log(error);
    }
    setLoading(false);
  };

  const handleInputs = () => {
    return (
      inputs &&
      inputs.map((input, i) => (
        <InputField
          id={input.id}
          label={input.label}
          pattern={input.pattern}
          type={input.type}
          error_msg={input.error_msg}
          refData={refData[i]}
          key={i}
        />
      ))
    );
  };

  // if user logged in
  useEffect(() => {
    if (currentUser) navigate("/browse");
  }, [currentUser]);

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h3>{authType}</h3>
      {/* loading animation */}
      {loading && (
        <div className="flex-row">
          <ClipLoader color="red" />
        </div>
      )}
      {/* error msg */}
      {error && <strong className="auth-error">{error}</strong>}
      {/* success msg */}
      {successMsg && !loading && !error && (
        <strong className="auth-success">{successMsg}</strong>
      )}
      {/* inpit fields */}
      {handleInputs()}
      <div className="change-auth-component">
        {authType === "sign up" ? (
          <p>
            Already have an account ? <Link to="/signin">Sign in</Link>
          </p>
        ) : (
          <p>
            Don't have an account ? <Link to="/signup">Sign up</Link>
          </p>
        )}
      </div>
      <div
        onClick={() => handleGmailAuth}
        className={
          loading ? "auth-form-btn-wrapper loading" : "auth-form-btn-wrapper"
        }
      >
        <Button value={authType} className="btn-auth" />
      </div>
      <div
        onClick={handleGmailAuth}
        className={
          loading ? "auth-form-btn-wrapper loading" : "auth-form-btn-wrapper"
        }
      >
        <Button value="Sign in with Google" className="btn-google" />
      </div>
      <div className="forgot-password">
        <Link to="/reset-password">Don't remember password?</Link>
      </div>
    </form>
  );
};

export default AuthForm;
