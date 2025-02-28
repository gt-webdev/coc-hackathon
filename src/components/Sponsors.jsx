const Sponsors = () => {
  return (
    <section id="sponsors" className="min-h-screen font-[Nunito] py-20 px-8 bg-blue-950 text-center">
      <h2 className="text-5xl font-bold text-white">Our Sponsors</h2>
      <div className="flex justify-center gap-12 mt-12">
        <div className="p-6 bg-white rounded-lg w-56 h-56 flex items-center justify-center shadow-lg">
          <img
            src="/us-soccer.png" // Replace with your image path
            alt="US Soccer"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-6 bg-white rounded-lg w-56 h-56 flex items-center justify-center shadow-lg">
          <img
            src="/geico.png" // Replace with your image path
            alt="Geico"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-6 bg-white rounded-lg w-56 h-56 flex items-center justify-center shadow-lg">
          <img
            src="/chick-fil-a.png" // Replace with your image path
            alt="Chick-Fil-A"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
