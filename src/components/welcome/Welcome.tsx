import { Link } from 'react-router-dom'
import BG from '../../assets/landing-bg.jpg'

import './Welcome.scss'

const Welcome = () => {
  return (
    <section className='Welcome flex-col' style={{background: `url(${BG})`}}>
      <div className="bg-blur"></div>
      <div className="container">
        <div className="Welcome-wrapper flex-col">
          <p>Unlimited movies, TV shows, and more.</p>
          <p>Watch anywhere. Cancel anytime.</p>
          <p>Ready to watch? <Link to="/auth">Log in</Link> with your email to start your membership.</p>
        </div>
        <hr />
      </div>
    </section>
  )
}

export default Welcome