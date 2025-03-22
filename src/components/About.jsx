import calendar from '../assets/calendar.svg'
import mappin from '../assets/map-pin.svg'

const About = () => {
  const startDate = new Date('2024-04-05T08:00:00-04:00'); // 8:00 AM EDT
  const endDate = new Date('2024-04-06T17:15:00-04:00');   // 5:15 PM EDT

  const toGoogleCalendarUTC = (date) => {
    return date.toISOString().replace(/[-:]|\.\d{3}/g, '');
  }

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Ramblin'+Hacks&location=Tech+Square+Research+Building,+85+5th+St+NW,+Atlanta,+GA+30332&dates=${toGoogleCalendarUTC(startDate)}/${toGoogleCalendarUTC(endDate)}`;

  return (
    <section id="about" className="min-h-screen flex items-center justify-center font-[Roboto] py-20 px-8 bg-[#F9F6E5] text-black">
      <div className="max-w-6xl w-full">

        <h2 className="text-5xl font-bold text-[#003057] font-[Anton] text-center">About</h2>
        <br />
  
        {/*two column layout*/}
        <div className="flex flex-col lg:flex-row items-start gap-10 mt-4">

          {/* Left: text */}
          <div className="flex-1">
            <p className="text-2xl text-left">
              Georgia Tech's College of Computing introduces our inaugural co-sponsored hackathon: Ramblin' Hacks! This dynamic 2-day event will bring together talented students to tackle real-world challenges through creative coding and innovative solutions.
            </p>
            <br />
            <div className="flex flex-row gap-2 items-center mt-6">
              <a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={calendar} alt="calendar icon" className="w-11 h-auto" />
              </a>
              <p className="text-2xl text-start">April 5th–6th</p>
            </div>

            <br />
            <div className="flex flex-row gap-2 items-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Tech+Square+Research+Building,+85+5th+St+NW,+Atlanta,+GA+30332"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={mappin} alt="map pin icon" className="w-11 h-auto cursor-pointer" />
              </a>
              <p className="text-2xl text-start">
                Tech Square Research Building <br />
                85 5th St NW, Atlanta, GA 30332
              </p>
            </div>
          </div>
  
          {/* Right: google maps image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/images/google-maps-location.png"
              alt="Google Maps location"
              className="w-full max-w-md rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
