import { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000);
    console.log("Interval scheduled.");

    return () => {
      clearInterval(intervalId);
      console.log("Interval cleared.");
    };
  }, []);

  return (
    <h5 className="text-warning position-absolute top-50 start-50 translate-middle">
      Current Date: {date.toLocaleDateString()} & Current Time:{" "}
      {date.toLocaleTimeString()}
    </h5>
  );
};

export default Clock;
