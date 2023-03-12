import { FormEvent, useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

import Button from "../button/Button";
import { AuthInputs } from "../../types";

import "./AuthForm.scss";

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
  ]

  const { handleSignup, handleLogin } = useAuth()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState<boolean>(false)

  console.log(authType)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if(authType === 'sign up' && refData[1].current?.value !== refData[2].current?.value){
      console.log('arada working')
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      {authType === 'sign up' ? await handleSignup(refData[0].current?.value, refData[1].current?.value) : await handleLogin(refData[0].current?.value, refData[1].current?.value)}
      {authType === 'sign up' ? console.log('succesfully registered') : console.log('succesfully logged in')}
    } catch (error: any) {
      // TODO: Type individual errors for auth 
      if(error.code === 'auth/user-not-found') {
        console.log('wtf')
      } else {
        console.log('auth/user-not-found')
      }
      console.log(error)
      setError('Something went wrong, please try again')
    }
    setLoading(false)
  }

  const handleInputs = () => {
    return inputs && inputs.map((input, i) => (
      <div className="input-wrapper flex-col" key={input.id}>
        <label htmlFor={input.id}>{input.label}</label>
        <input type={input.type} id={input.id} ref={refData[i]} placeholder={input.label} required/>
      </div>
    ))
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h3>{authType}</h3>
      {error && error}
      {handleInputs()}
      <div>
        <Button value={authType} className="btn-auth" />
      </div>
    </form>
  );
};

export default AuthForm;
