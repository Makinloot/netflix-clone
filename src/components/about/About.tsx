import Video from "./Video";
import Downloading from "./Downloading";

import { AboutProps } from "../../types";

import "./About.scss";

const About: React.FC<AboutProps> = ({
  title,
  text,
  img,
  video,
  videoClass,
  downloading,
}) => {
  return (
    <section className="About flex-row">
      {downloading && <Downloading img={img} />}
      {img === "/src/assets/kids.png" && (
        <div className="About-img">
          <img src={img} />
        </div>
      )}
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      {video && <Video img={img} video={video} className={videoClass} />}
      <hr />
    </section>
  );
};

export default About;
