import FaqItem from "./FaqItem";

import "./Faq.scss";

import { faqData } from "../../data";

const Faq = () => {
  return (
    <section className="Faq flex-col">
      <h2>Frequently Asked Questions</h2>
      <ul className="Faq-list">
        {faqData.map((faq, i) => (
          <FaqItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            answer2={faq.answer2}
          />
        ))}
      </ul>
      <hr />
    </section>
  );
};

export default Faq;
