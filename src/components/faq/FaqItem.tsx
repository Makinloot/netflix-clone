import { useState } from "react";
import close from "../../assets/close.png";

// types
import { FaqProps } from "../../types";

const FaqItem: React.FC<FaqProps> = ({ question, answer, answer2}) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  return (
    <li onClick={() => setShowAnswer(!showAnswer)}>
      <div className="question flex-row">
        <h3>{question}</h3>
        <img src={close} className={!showAnswer ? "open" : ""} />
      </div>
      <div className={showAnswer ? "answer" : "answer hidden"}>
        <p>
          {answer}
        </p>
        <p style={{marginTop: '2rem'}}>
          {answer2}
        </p>
      </div>
    </li>
  );
};

export default FaqItem;
