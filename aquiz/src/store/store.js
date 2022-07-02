import { configureStore } from '@reduxjs/toolkit';

import quizSlice from './quiz-slice';

const store = configureStore({
  reducer: quizSlice.reducer,
});

export default store;
