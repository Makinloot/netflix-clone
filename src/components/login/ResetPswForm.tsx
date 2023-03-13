import { FormEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "../button/Button";

import "./AuthForm.scss";
import InputField from "./InputField";
import { ClipLoader } from "react-spinners";

const ResetPswForm = () => {
  const [msg, setMsg] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const { handleResetPsw } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setMsg("");
      setError("");
      setLoading(true);
      await handleResetPsw(value);
      setMsg("Check your inbox for further instructions");
    } catch (error: any) {
      console.log(error);
      if (error.code === "auth/user-not-found") setError("User not found.");
      setError("Failed to reset password");
    }
    setLoading(false);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h3>reset password</h3>
      {msg && <strong className="auth-success">{msg}</strong>}
      {error && <strong className="auth-error">{error}</strong>}
      {loading && (
        <div className="flex-row">
          <ClipLoader color="red" />
        </div>
      )}
      <InputField
        id="reset-password"
        label="email"
        type="email"
        valueSetter={setValue}
      />
      <div className="change-auth-component">
        <p>
          {" "}
          <Link to="/signin">Sign in</Link>{" "}
        </p>
      </div>
      <Button value="submit" className="btn-auth" />
    </form>
  );
};

export default ResetPswForm;
