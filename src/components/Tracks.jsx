const Tracks = () => {
  const tracks = [
    {
      title: "Generative AI in Healthcare",
      color: "bg-[#B3A369]",
    },
    {
      title: "Smart Soccer",
      color: "bg-[#B3A369]",
    },
    {
      title: "Sustainability",
      color: "bg-[#B3A369]",
    },
  ];

  return (
    <section id="tracks" className="min-h-screen flex items-center justify-center font-[Roboto] py-20 px-8 bg-[#F9F6E5]">
      <style>
        {`
          .clip-hexagon {
            clip-path: polygon(
              50% 0%,
              93% 25%,
              93% 75%,
              50% 100%,
              7% 75%,
              7% 25%
            );
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6 text-[#003057] font-[Anton]">Tracks</h2>
        <br />
        <br />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div
              key={index}
              className={`relative w-64 h-64 mx-auto ${track.color} text-white rounded-full shadow-lg 
              transition-transform duration-300 ease-in-out hover:scale-110 clip-hexagon`}
            >
              <h3 className="absolute inset-0 text-center flex justify-center items-center text-2xl font-semibold">
                {track.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
