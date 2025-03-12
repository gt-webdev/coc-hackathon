const Schedule = () => {
  const schedule = [
    {
      date: "April 5th",
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
      date: "April 6th",
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
    <section id="schedule" className="font-[Nunito] py-20 px-8 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Event Schedule</h2>
        <br />
        {schedule.map(({ date, events }, index) => (
          <div key={index} className="mb-8">
            <br />
            <h3 className="text-3xl font-bold text-blue-950">{date}</h3>
            <ul className="mt-2 space-y-4">
              {events.map(({ time, event }, i) => (
                <li key={i} className="p-4 bg-white shadow rounded-lg text-left">
                  <span className="font-semibold">{time}:</span> {event}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
