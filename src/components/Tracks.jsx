const Tracks = () => {
  const tracks = [
    {
      title: "Generative AI in Healthcare",
      color: "bg-gradient-to-r from-blue-950 to-indigo-900",
    },
    {
      title: "Smart Soccer",
      color: "bg-gradient-to-r from-blue-950 to-indigo-900",
    },
    {
      title: "Sustainability",
      color: "bg-gradient-to-r from-blue-950 to-indigo-900",
    },
  ];

  return (
    <section id="tracks" className="min-h-screen flex items-center justify-center font-[Nunito] py-20 px-8 white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6 text-blue-950">Tracks</h2>
        <br />
        <br />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div
              key={index}
              className={`relative w-64 h-64 mx-auto ${track.color} text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out`}
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
