import React, { useState } from 'react';
import '../pages/css/faqs.css';

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "When do the courses start?",
      answer: "Our courses start on the 1st of every month. You can enroll any time before that."
    },
    {
      question: "Are you providing certification?",
      answer: "Yes, we provide certification upon successful completion of the course."
    },
    // {
    //   question: "Are the courses online or offline?",
    //   answer: "All our courses are conducted online to ensure flexibility and accessibility."
    // },
   
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-header" onClick={() => toggleFAQ(index)}>
              <span className="faq-toggle-icon">
                {openIndex === index ? '−' : '+'}
              </span>
              <h4 className="faq-question">{faq.question}</h4>
            </div>
            {openIndex === index && (
              <p className="faq-answer">✅ {faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQS;
