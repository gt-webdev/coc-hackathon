const Sponsors = () => {
  const sponsors = [
    {
      name: "US Soccer",
      image: "/images/us-soccer.png",
      url: "https://www.ussoccer.com/",
    },
    {
      name: "Geico",
      image: "/images/geico.png",
      url: "https://www.geico.com/",
    },
    {
      name: "Chick-Fil-A",
      image: "/images/chick-fil-a.png",
      url: "https://www.chick-fil-a.com/",
    },
  ];

  return (
    <section id="sponsors" className="min-h-screen font-[Nunito] py-20 px-8 bg-blue-950 text-center">
      <h2 className="text-5xl font-bold text-white">Our Sponsors</h2>
      <div className="flex justify-center gap-12 mt-12">
        {sponsors.map((sponsor) => (
          <a 
            key={sponsor.name}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-lg w-56 h-56 flex items-center justify-center shadow-lg"
          >
            <img src={sponsor.image} alt={sponsor.name} className="w-full h-full object-contain"/>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
