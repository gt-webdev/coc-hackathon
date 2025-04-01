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
      name: "Elevance Health",
      image: "/images/elevance-health.png",
      url: "https://www.elevancehealth.com/",
    },
    {
      name: "Goldman Sachs",
      image: "/images/goldman_sachs.png",
      url: "https://www.goldmansachs.com/"
    },
    {
      name: "Microsoft",
      image: "/images/microsoft.png",
      url: "https://www.microsoft.com/en-us/"
    },
    {
      name: "Fanduel",
      image: "/images/fanduel.png",
      url: "https://www.fanduel.com/"
    },
    {
      name: "The Trade Desk",
      image: "/images/the-trade-desk.png",
      url: "https://www.thetradedesk.com/"
    }
  ];

  return (
    <section id="sponsors" className="min-h-screen font-[Roboto] py-20 px-8 bg-[#F9F6E5] text-center justify-center flex items-center">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-[#003057] font-[Anton]">Our Sponsors</h2>
        <h3 className="text-xl text-black py-2">More to Come!</h3>
        <div className="flex flex-wrap justify-center gap-20 mt-12">
          {sponsors.map((sponsor) => (
            <a 
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-72 h-72 flex flex-col items-center justify-center shadow-lg"
            >
              <img src={sponsor.image} alt={sponsor.name} className="w-full h-full object-contain"/>
              {(sponsor.name === "US Soccer" || sponsor.name === "Fanduel") && (
                <span className="mt-4 text-black font-extrabold text-2xl">{sponsor.name}</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
