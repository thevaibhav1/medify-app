// FAQSection.jsx
import faq from "../../assets/FAQ/faq.png";
import faq2 from "../../assets/FAQ/faq2.png";

const faqs = [
  "Why choose our medical for your family?",
  "Why we are different from others?",
  "Trusted & experience senior care & love",
  "How to get appointment for emergency cases?",
];

const FAQSection = () => {
  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <p className="text-[#2AA7FF] text-sm font-[poppins] font-medium text-center">
        Get Your Answer
      </p>
      <h2 className="text-[32px] md:text-[40px] font-[poppins] font-bold text-center text-[#1B3C74] mb-10">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <div className="relative w-full md:w-[50%]">
          <img
            src={faq}
            alt="Doctor & Patient"
            className="rounded-lg   w-full object-cover"
          />

          {/* Apple badge */}

          {/* Happy Patients badge */}
        </div>

        {/* Right Side - FAQs */}
        <div className="w-full md:w-[50%] space-y-5">
          {faqs.map((q, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border-b border-gray-200 pb-3"
            >
              <p className="text-[#1B3C74] font-[poppins] font-semibold text-[18px] leading-[30px] align-middle  ">
                {q}
              </p>
              <span className="text-[#2AA7FF] text-xl font-bold">+</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
