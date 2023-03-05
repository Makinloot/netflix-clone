import { FadeLoader } from "react-spinners";

import poster from "../../assets/poster.png";

const Downloading: React.FC<{
  img: string;
}> = ({ img }) => {
  return (
    <div className="About-img downloading">
      <img src={img} />
      <div className="downloading flex-row">
        <img src={poster} />
        <div className="flex-col">
          <strong>Stranger Things</strong>
          <span style={{ color: "#0071eb" }}>Downloading...</span>
        </div>
        <div>
          <FadeLoader color="#0071eb" />
        </div>
      </div>
    </div>
  );
};

export default Downloading;
