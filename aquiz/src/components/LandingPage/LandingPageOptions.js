import LandingPageCard from './LandingPageCard';
import styles from './LandingPageOptions.module.css';

const LandingPageOptions = (props) => {
  return (
    <div className={styles.options}>
      <LandingPageCard
        icon='html'
        text='HTML'
        selected={props.selectedQuiz === 'HTML'}
        onClick={props.onSelectQuiz.bind(null, 'HTML')}
      />
      
      <LandingPageCard
        icon='react'
        text='React.js'
        selected={props.selectedQuiz === 'React.js'}
        onClick={props.onSelectQuiz.bind(null, 'React.js')}
      />
      <LandingPageCard
        icon='node-js'
        text='Node.js'
        selected={props.selectedQuiz === 'Node.js'}
        onClick={props.onSelectQuiz.bind(null, 'Node.js')}
      />
      <LandingPageCard
        icon='mongodb'
        text='DBMS'
        selected={props.selectedQuiz === 'DBMS'}
        onClick={props.onSelectQuiz.bind(null, 'DBMS')}
      />
      <LandingPageCard
        icon='windows'
        text='OS'
        selected={props.selectedQuiz === 'OS'}
        onClick={props.onSelectQuiz.bind(null, 'OS')}
      />
      <LandingPageCard
        icon='cpp'
        text='DS and Algo'
        selected={props.selectedQuiz === 'Ds and Algo'}
        onClick={props.onSelectQuiz.bind(null, 'Ds and Algo')}
      />
    </div>
  );
};

export default LandingPageOptions;
