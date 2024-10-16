import React, {useState, useEffect} from 'react';

export const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setTime(new Date());
  }, []);

  // Function to format the time
  const formatTime = date => {
    return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}); // Change this to customize the format
  };

  return formatTime(time);
};
