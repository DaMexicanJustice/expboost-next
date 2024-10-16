import { CalendarDays, Clock } from "lucide-react";

export default function UpcomingBroadcasts() {
  const broadcasts = [
    { title: "Speedrun Challenge", date: "2024-10-14", time: "15:00 GMT+2" },
    { title: "New Release Review", date: "2024-10-21", time: "15:00 GMT+2" },
    { title: "Multiplayer Mayhem", date: "2024-10-28", time: "15:00 GMT+2" },
  ];

  return (
    <div id="pinned-element" className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold uppercase mb-4 text-white">Next Up</h2>
      <ul className="space-y-4">
        {broadcasts.map((broadcast, index) => (
          <li key={index} className="bg-gray-700 p-4 rounded-md">
            <h3 className="text-lg font-semibold text-white">
              {broadcast.title}
            </h3>
            <div className="flex items-center text-gray-300 mt-2">
              <CalendarDays className="w-4 h-4 mr-2" />
              <span>{broadcast.date}</span>
            </div>
            <div className="flex items-center text-gray-300 mt-1">
              <Clock className="w-4 h-4 mr-2" />
              <span>{broadcast.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
