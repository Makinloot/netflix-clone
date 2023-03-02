import Hero from "../hero/Hero";

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
        </div>
      </div>
    </main>
  );
};

export default Main;
