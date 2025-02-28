const FAQs = () => {
    const faqs = [
      { question: "Who can participate?", answer: "Anyone with a passion for coding and innovation!" },
      { question: "Is there a registration fee?", answer: "No, the event is completely free!" },
      { question: "What should I bring?", answer: "A laptop, charger, and lots of energy!" },
    ];
  
    return (
      <section id="faqs" className="py-20 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map(({ question, answer }, index) => (
            <div key={index} className="p-4 bg-white shadow rounded-lg">
              <h3 className="font-semibold">{question}</h3>
              <p className="text-gray-600">{answer}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default FAQs;
  