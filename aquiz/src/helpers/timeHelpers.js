// Helpers
export const isTimeRemaining = (startTimestamp, duration) => {
  const now = +new Date();
  return startTimestamp + duration < now;
};

export const remainingTimeToString = (remainingTime) => {
  const hours = Math.floor(remainingTime / (60 * 60 * 1000));
  const mins = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
  const secs = Math.floor((remainingTime % (60 * 1000)) / 1000);

  return `${hours}:${mins}:${secs}`;
};

export const getTimeRemainingString = (startTimestamp, duration) => {
  const remainingTime = startTimestamp + duration - new Date();
  return remainingTimeToString(remainingTime);
};
