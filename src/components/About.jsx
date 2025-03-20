import calendar from '../assets/calendar.svg'
import mappin from '../assets/map-pin.svg'

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center font-[Roboto] py-20 px-8 bg-[#F9F6E5] text-black">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-[#003057] font-[Anton]">About</h2>
        <br />
        <div className="flex flex-col justify-between">

          <p className="mt-4 text-2xl text-justify">
            Georgia Tech's College of Computing introduces our inaugural co-sponsored hackathon: Ramblin' Hacks! This dynamic 2-day event will bring together talented students to tackle real-world challenges through creative coding and innovative solutions.
          </p>
          <br />
          <div className="flex flex-row gap-2 items-center">
              <img src={calendar} alt="calendar icon" className="w-11 h-auto" />
              <p className="text-2xl text-start">April 5th-6th</p>
          </div>
          <div className="flex flex-row gap-2 items-center mt-2">
              <img src={mappin} alt="map pin icon" className="w-11 h-auto" />
              <p className="text-2xl text-start">Tech Square Research Building <br/>85 5th St NW, Atlanta, GA 30332</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
