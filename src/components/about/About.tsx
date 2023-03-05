import Video from "./Video";

import "./About.scss";
import Downloading from "./Downloading";

const About: React.FC<{
  title: string;
  text: string;
  img: string;
  video?: string;
  videoClass?: string;
  downloading?: boolean;
}> = ({ title, text, img, video, videoClass, downloading }) => {
  return (
    <section className="About flex-row">
      {downloading && <Downloading img={img} />}
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
