import React, { useState, useEffect } from "react";
import { X } from "react-feather";
import dayjs from "dayjs";

const liveClasses = [
  {
    id: 1,
    title: "Morning Session",
    topic: "🔥 Morning Energy Zumba",
    start_time: "2025-09-10T07:00:00Z",
    end_time: "2025-09-10T08:15:00Z",
    join_url: "https://zoom.us/test-join-1",
  },
  {
    id: 2,
    title: "Evening Cardio",
    topic: "💃 Dance & Cardio Blast",
    start_time: "2025-09-11T17:00:00Z",
    end_time: "2025-09-11T18:00:00Z",
    join_url: "https://zoom.us/test-join-2",
  },
  {
    id: 3,
    title: "Strength & Fusion",
    topic: "🏋️ Strength + Zumba Fusion",
    start_time: "2025-09-12T19:00:00Z",
    end_time: "2025-09-12T20:00:00Z",
    join_url: "https://zoom.us/test-join-3",
  },
];

const LiveClasses = () => {
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => setNow(dayjs()), 60000); // update every minute
    return () => clearInterval(timer);
  }, []);

  const handleJoin = (cls) => {
    window.open(cls.join_url || "#", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
          🎥 Live Zumba Classes
        </h1>
        <p className="text-gray-400 mt-2 text-lg">
          Join our scheduled live sessions at the right time.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {liveClasses.map((cls) => {
          const start = dayjs(cls.start_time);
          const end = dayjs(cls.end_time);

          // determine button state
          const isUpcoming = now.isBefore(start);
          const isLive = now.isAfter(start) && now.isBefore(end);
          const isOver = now.isAfter(end);

          if (isOver) return null; // don't show finished classes

          return (
            <div
              key={cls.id}
              className="p-6 bg-gray-900 rounded-2xl shadow-lg border border-gray-800 hover:shadow-purple-700/50 transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-white">{cls.title}</h2>
                <span className="text-gray-400 text-sm">
                  {start.format("MMM D, h:mm A")}
                </span>
              </div>

              <button
                disabled={!isLive}
                onClick={() => handleJoin(cls)}
                className={`mt-4 w-full cursor-pointer py-3 rounded-xl font-medium transition
                  ${
                    isLive
                      ? "bg-gradient-to-r from-pink-500 to-red-500 text-white hover:opacity-90"
                      : "bg-gray-700 text-gray-300 cursor-not-allowed"
                  }
                `}
              >
                {isUpcoming
                  ? `Starts at ${start.format("h:mm A")}`
                  : isLive
                  ? "Join Live Class"
                  : ""}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LiveClasses;
