import store from './store';
import quizActions from './quiz-actions';

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

const getReduxStateFromLocalStorage = () => {
  try {
    const persistedState = localStorage.getItem('reduxState');
    if (persistedState) return JSON.parse(persistedState);
  } catch (e) {}
};

const persistedState = getReduxStateFromLocalStorage();

if (persistedState) {
  store.dispatch(quizActions.hyderate(persistedState));
}
