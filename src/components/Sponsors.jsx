const Sponsors = () => { 
  const sponsors = [
    {
      name: "Playon! Sports",
      image: "/images/playon.jpg",
      url: "https://www.playonsports.com/",
    },
    {
      name: "NCR Voyix",
      image: "/images/ncr.png",
      url: "https://www.ncr.com/voyix",
    },
    {
      name: "Elevance Health",
      image: "/images/elevance-health.png",
      url: "https://www.elevancehealth.com/",
    },
    {
      name: "Cox Enterprises",
      image: "/images/cox_enterprises.jpg",
      url: "https://www.coxenterprises.com/"
    }
  ];

  return (
    <section id="sponsors" className="min-h-screen font-[Roboto] py-20 px-8 bg-[#F9F6E5] text-center justify-center flex items-center">
      <div className="max-w-7xl mx-auto text-center items-center">
        <h2 className="text-5xl font-bold text-[#003057] font-[Anton]">Our Sponsors</h2>
        <h3 className="text-xl text-black py-2">More to Come!</h3>
        <div className="flex flex-wrap justify-center gap-20 mt-12">
          {sponsors.map((sponsor) => (
            <a 
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-72 h-72 flex flex-col items-center justify-center"
            >
              <img src={sponsor.image} alt={sponsor.name} className="w-full h-full object-contain"/>
              {(sponsor.name === "US Soccer" || sponsor.name === "Fanduel") && (
                <span className="mt-4 text-black font-extrabold text-2xl">{sponsor.name}</span>
              )}
            </a>
          ))}
          
        </div>
        <div className="mt-12 flex justify-center">
          <img src="/images/capital.jpg" alt="Capital One Sponsor" className="w-72 h-72 object-contain mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
