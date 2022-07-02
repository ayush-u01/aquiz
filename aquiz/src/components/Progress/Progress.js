import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progress = (props) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    let percentage = 0;
    let id = setInterval(() => {
      if (percentage === props.percentage) {
        id = null;
        clearInterval(id);
        return;
      }
      ++percentage;
      setCurrentPercentage(percentage);
    }, 20);

    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, [props.percentage]);

  return (
    <CircularProgressbar
      value={currentPercentage}
      text={`${currentPercentage}%`}
      styles={buildStyles(props.styles || {})}
    />
  );
};

export default Progress;
