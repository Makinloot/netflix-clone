import Hero from "../hero/Hero";
import Row from "../row/Row";

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
          <Row heading="netflix originals" className="Row" />
          <Row heading="trending now" className="Row small" />
          <Row heading="top rated" className="Row small" />
          <Row heading="action movies" className="Row small" />
          <Row heading="comedy movies" className="Row small" />
          <Row heading="horror movies" className="Row small" />
        </div>
      </div>
    </main>
  );
};

export default Main;
