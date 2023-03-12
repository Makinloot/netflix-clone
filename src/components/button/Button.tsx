import googleIcon from '../../assets/google.png'

import './Button.scss'

const Button: React.FC<{
  value: string;
  className: string;
}> = ({ value, className}) => {
  return (
    <button className={className} type={className === 'btn-google' ? 'button' : 'submit'}>
      {className === 'btn-google' && <img src={googleIcon} /> }
      {value}
    </button>
  )
}

export default Button