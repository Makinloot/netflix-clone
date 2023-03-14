import React, { RefObject } from "react";
import { AuthInputs } from "../../types";

// : React.FC<AuthInputs>
const InputField = (props: {
  id: string;
  label: string;
  type: string;
  pattern?: string;
  refData?: RefObject<HTMLInputElement>;
  valueSetter?: any
}) => {

  return (
    <div className="input-wrapper flex-col" key={props.id}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        ref={props.refData}
        pattern={props.pattern}
        placeholder={props.label}
        onChange={(e: any) => props.valueSetter(e.target.value)}
        required
      />
    </div>
  );
};

export default InputField;
