import { configureStore } from '@reduxjs/toolkit';
import cashFlowreducer from './features/cashFlowreducer';

export const store = configureStore({
  reducer: {
    cashFlowreducer: cashFlowreducer,
  },
});