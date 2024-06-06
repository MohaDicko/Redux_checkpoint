import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/tasksReducer';


// Configure le store avec le réducteur de tâches
const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
});

export default store;
