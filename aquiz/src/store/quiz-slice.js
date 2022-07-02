import { createSlice } from '@reduxjs/toolkit';
import ms from 'ms';

const initialState = {
  appState: 'inital', // initial, starting(instructions), running, completed
  quizName: '',
  durationMs: 0,
  questions: [],
  startTimestamp: 0,
  currentQuestionNum: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState: initialState,
  reducers: {
    hyderate(state, action) {
      return action.payload;
    },

    startQuiz(state, action) {
      state.appState = 'starting';
      state.quizName = action.payload.quizName;
      state.durationMs = ms(action.payload.duration);
      state.questions = action.payload.questions.map((question) => ({
        ...question,
        visited: false,
        selectedOption: 0,
      }));

      state.questions[0].visited = true;
      state.currentQuestionNum = 1;
    },

    beginQuiz(state) {
      state.appState = 'running';
      state.startTimestamp = +new Date();
    },

    endTest(state) {
      state.appState = 'completed';
    },

    clearTest(state) {
      return initialState;
    },

    markOption(state, action) {
      // Unmark if same is already marked
      if (
        state.questions[action.payload.questionNum - 1].selectedOption ===
        action.payload.option
      ) {
        state.questions[action.payload.questionNum - 1].selectedOption = 0;
        return;
      }

      state.questions[action.payload.questionNum - 1].selectedOption =
        action.payload.option;
    },

    changeCurrent(state, action) {
      state.questions[action.payload - 1].visited = true;
      state.currentQuestionNum = action.payload;
    },
  },
});

export const quizActions = quizSlice.actions;

export default quizSlice;
