import './Button.scss'

const Button: React.FC<{
  value: string;
  className: string;
}> = ({ value, className}) => {
  return (
    <button className={className}>{value}</button>
  )
}

export default Button