import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './baseRequest.initialState';

const baseRequestSlice = createSlice({
  name: 'baseRequest',
  initialState,
  reducers: {
    requestBaseRequest(
      state,
      {}: PayloadAction<{
        country: string;
      }>,
    ) {
      state.error = null;
      state.isFetching = true;
    },

    requestBaseRequestSuccessful(state, { payload }) {
      state.data = payload;
      state.error = null;
      state.isFetching = false;
    },

    rrequestBaseRequestFailed(state, { payload }) {
      const { error } = payload;
      state.error = error;
      state.isFetching = false;
    },
  },
});

export const {
  requestBaseRequest,
  requestBaseRequestSuccessful,
  rrequestBaseRequestFailed,
} = baseRequestSlice.actions;

export default baseRequestSlice.reducer;
