import SvgIcon from '../../utils/SvgIcon/SvgIcon';
import styles from './Timer.module.css';
import { remainingTimeToString } from '../../helpers/timeHelpers';

const Timer = (props) => {
  const timeRemainingString = remainingTimeToString(props.timer);

  let className = styles.timer;

  if (props.timer < (props.alertThreshold ?? 60 * 1000)) {
    className += ' ' + styles.timerAlert;
  }

  return (
    <div className={className}>
      <SvgIcon icon='clock' className={styles.timerIcon} />
      <div className={styles.timerAct}>
        {timeRemainingString}
        <span className={styles.timerRemaining}>
          {props.text || 'Remaining'}
        </span>
      </div>
    </div>
  );
};

export default Timer;
