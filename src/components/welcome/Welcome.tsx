import BG from '../../assets/landing-bg.jpg'

import './Welcome.scss'

const Welcome = () => {
  return (
    <div className='Welcome flex-col' style={{background: `url(${BG})`}}>
      <div className="bg-blur"></div>
      <div className="container">
        <div className="Welcome-wrapper flex-col">
          <p>Unlimited movies, TV shows, and more.</p>
          <p>Watch anywhere. Cancel anytime.</p>
          <p>Ready to watch? <a href="#">Log in</a> with your email to start your membership.</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Welcome