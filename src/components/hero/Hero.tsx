import Button from "../button/Button";

// media & styles
import "./Hero.scss";
import testBG from "../../assets/test.jpg";

const Hero: React.FC<{
  heading: string;
  description: string;
}> = ({ heading, description }) => {
  return (
    <div className="Hero flex-col">
      <h2 className="Hero-heading">{heading}</h2>
      <div className="Hero-buttons flex-row">
        <Button value="play" className="btn-dark" />
        <Button value="my list" className="btn-dark"/>
      </div>
      <p className="Hero-description">{description}</p>
      <div className="Hero-blur"></div>
    </div>
  );
};

export default Hero;
