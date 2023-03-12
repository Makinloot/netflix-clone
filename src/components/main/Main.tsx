import Hero from "../hero/Hero";
import Row from "../row/Row";

import requests from "../../requests";

import "./Main.scss";

const Main = () => {

  return (
    <main className="Main">
      <div className="container">
        <div className="Main-wrapper">
          <Hero />
          <Row heading="netflix originals" className="Row" fetchUrl={requests.netflixOriginals} />
          <Row heading="trending now" className="Row small" fetchUrl={requests.trending} />
          <Row heading="top rated" className="Row small" fetchUrl={requests.topRated} />
          <Row heading="action" className="Row small" fetchUrl={requests.action} />
          <Row heading="comedy" className="Row small" fetchUrl={requests.comedy} />
          <Row heading="animation" className="Row small" fetchUrl={requests.animation} />
          <Row heading="horror" className="Row small" fetchUrl={requests.horror} />
          <Row heading="fantasy" className="Row small" fetchUrl={requests.fantasy} />
        </div>
      </div>
    </main>
  );
};

export default Main;
