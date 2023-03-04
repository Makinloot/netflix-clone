import Hero from "../hero/Hero";
import Row from "../row/Row";

import requests from "../../requests";

import "./Main.scss";

const Main = () => {
  return (
    <main className="Main">
      <div className="container">
        <div className="Main-wrapper">
          <Hero
            heading="the witcher"
            description="Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where poeple often prove more wicked than beasts."
          />
          <Row heading="netflix originals" className="Row" fetchUrl={requests.netflixOriginals} />
          <Row heading="trending now" className="Row small" fetchUrl={requests.trending} />
          <Row heading="top rated" className="Row small" fetchUrl={requests.topRated} />
          <Row heading="action" className="Row small" fetchUrl={requests.action} />
          <Row heading="comedy" className="Row small" fetchUrl={requests.comedy} />
          <Row heading="horror" className="Row small" fetchUrl={requests.horror} />
          <Row heading="fantasy" className="Row small" fetchUrl={requests.fantasy} />
          <Row heading="history" className="Row small" fetchUrl={requests.history} />
        </div>
      </div>
    </main>
  );
};

export default Main;
