import Header from "../components/header/Header"
import Welcome from "../components/welcome/Welcome"

const Landing = () => {
  return (
    <div className="Landing">
      <div className="container">
        <div className="Landing-wrapper">
          <Header landing={true} />
          <Welcome />
        </div>
      </div>
    </div>
  )
}

export default Landing