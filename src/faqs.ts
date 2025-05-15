export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "How is my score being calculated?",
    answer:
      "Your score is calculated by distributing a total of 20 points between two categories: Clarity and Creativity. The combined value of both cannot exceed 20. If the total exceeds the limit, the system automatically adjusts the other category to ensure the total stays at 20.",
  },
  {
    question: "Why can't I assign full 20 points to both categories?",
    answer:
      "The system is designed to reflect your priorities. Allocating more points to one category means allocating fewer to the other. This enforces thoughtful distribution and balanced scoring.",
  },
  {
    question: "Can I change my scores after submitting?",
    answer:
      "Currently, scores are considered final once submitted. However, you can adjust your scores before submission. We are considering adding an edit feature in future updates.",
  },
  {
    question: "What do Clarity and Creativity represent?",
    answer:
      "Clarity measures how clearly and logically ideas are expressed. Creativity evaluates originality and innovation in the response. Together, they form a balanced metric for quality assessment.",
  },
];
