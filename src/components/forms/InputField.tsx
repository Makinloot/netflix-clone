import { RefObject, useState } from "react";

// : React.FC<AuthInputs>
const InputField = (props: {
  id: string;
  label: string;
  type: string;
  pattern?: string;
  refData?: RefObject<HTMLInputElement>;
  valueSetter?: any;
  error_msg?: string;
}) => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="input-wrapper flex-col" key={props.id}>
      <label htmlFor={props.id}>{props.label}</label>
      {!props.refData?.current?.validity.valid && <span style={{fontSize: '.825rem'}}>{props.error_msg}</span>}
      <input
        type={props.type}
        id={props.id}
        ref={props.refData}
        pattern={props.pattern}
        placeholder={props.label}
        onChange={(e: any) => {
          if(props.valueSetter){
            props.valueSetter(e.target.value);
          }
          setValue(e.target.value);
        }}
        required
      />
    </div>
  );
};

export default InputField;
