import About from "../components/about/About";
import Header from "../components/header/Header";
import Welcome from "../components/welcome/Welcome";

import tv from "../assets/tv.png";
import devices from "../assets/devices.png";
import mobile from "../assets/mobile.jpg";

const Landing = () => {
  return (
    <div className="Landing">
      <div className="container">
        <div className="Landing-wrapper">
          <Header landing={true} />
          <main>
            <Welcome />
            <About
              title="Enjoy on your TV."
              text="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
              img={tv}
              video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            />
            <About
              title="Enjoy on your TV."
              text="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
              img={mobile}
              downloading={true}
            />
            <About
              title="Watch everywhere."
              text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
              img={devices}
              video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              videoClass="devices"
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Landing;
