const Schedule = () => {
  const schedule = [
    {
      day: "Saturday",
      date: "April 5th, 2025",
      events: [
        { time: "8:00 AM - 9:30 AM", event: "Welcome Breakfast, Check-In, & Late Registration" },
        { time: "10:00 AM - 10:30 AM", event: "Hackathon Kickoff" },
        { time: "10:30 AM - 11:30 AM", event: "Team Formation" },
        { time: "11:30 AM - 12:30 PM", event: "Lunch and Networking" },
        { time: "1:00 PM", event: "Hacking Begins" },
        { time: "1:00 PM", event: "iOS Club Workshop" },
        { time: "6:00 PM - 7:00 PM", event: "Dinner Served" },
      ],
    },
    {
      day: "Sunday",
      date: "April 6th, 2025",
      events: [
        { time: "9:30 AM - 10:30 AM", event: "Breakfast" },
        { time: "12:00 PM", event: "Hackathon Ends" },
        { time: "12:00 PM - 1:30 PM", event: "Lunch" },
        { time: "1:30 PM - 4:00 PM", event: "Judging & Skill-based Talk" },
        { time: "4:15 PM - 5:15 PM", event: "Award Ceremony and Closing Remarks" },
      ],
    },
  ];

  return (
    <section id="schedule" className="font-[Roboto] py-25 px-8 bg-[#F9F6E5] flex justify-center item-center">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6 text-[#003057] font-[Anton]">Event Schedule</h2>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-30">
        {schedule.map(({ day, date, events }, index) => (
          <div key={index} className="bg-[#003057] shadow rounded-lg p-6 text-white text-left">
            <h3 className="text-3xl font-bold">{day}</h3>
            <h4 className="text-lg mb-8 text-[#99CCF6]">{date}</h4>
            <ul className="mt-2 space-y-4">
              {events.map(({ time, event }, i) => (
                <li key={i} className="">
                  <span className="font-semibold text-lg">{time}:</span> 
                  <br />
                  <span className="text-xl">{event}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
