import { useCallback, useMemo, useState, useEffect } from 'react';

const getRemainingTime = (endTime) => {
  const remain = endTime - Date.now();
  if (remain < 0) {
    return 0;
  }
  return remain;
};

const useTimer = (countDownForMs, startTime) => {
  const endTime = useMemo(
    () => (startTime || Date.now()) + countDownForMs,
    [countDownForMs, startTime]
  );

  const [timeRemaining, setTimeRemaining] = useState(getRemainingTime(endTime));

  const timeRemainingSetter = useCallback(() => {
    setTimeRemaining(getRemainingTime(endTime));
  }, [endTime]);

  useEffect(() => {
    let id = setInterval(() => {
      timeRemainingSetter();
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [timeRemainingSetter]);

  return timeRemaining;
};

export default useTimer;
