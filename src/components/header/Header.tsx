// media & styles
import './Header.scss'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className='Header'>
      <div className="container">
        <div className="Header-wrapper">
          <div className="Header-logo">
            <img src={logo} alt="netflix logo" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header