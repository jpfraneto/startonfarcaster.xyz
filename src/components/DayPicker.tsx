import React, { useEffect } from "react";

interface DayPickerProps {
  chosenDay: number;
  setChosenDay: (day: number) => void;
}

const DayPicker: React.FC<DayPickerProps> = ({ chosenDay, setChosenDay }) => {
  const totalDays = 7;

  // Load saved day from localStorage
  useEffect(() => {
    const savedDay = localStorage.getItem("chosenDay");
    if (savedDay) {
      setChosenDay(parseInt(savedDay, 10));
    }
  }, [setChosenDay]);

  // Save chosen day to localStorage
  useEffect(() => {
    localStorage.setItem("chosenDay", chosenDay.toString());
  }, [chosenDay]);

  // Handle day selection
  const handleDayClick = (day: number) => {
    setChosenDay(day);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white  mb-1">
      {/* Progress bar */}
      <div className="relative h-1.5 bg-[#c8b9e0]/10 rounded-full w-full mb-2">
        <div
          className="absolute h-1.5 bg-[#c8b9e0] rounded-full transition-all duration-300"
          style={{ width: `${(chosenDay / totalDays) * 100}%` }}
        ></div>
      </div>

      {/* Day indicators */}
      <div className="flex justify-between">
        {Array.from({ length: totalDays }, (_, i) => i + 1).map((day) => (
          <button
            key={day}
            onClick={() => handleDayClick(day)}
            className={`cursor-pointer hover:shadow-md w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              chosenDay === day
                ? "bg-[#c8b9e0] border-gray-500 text-white font-bold"
                : day < chosenDay
                ? "bg-[#c8b9e0]/60 border-gray-500 text-white"
                : "bg-white text-black border border-gray-500/30"
            }`}
            aria-label={`Day ${day}`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DayPicker;
