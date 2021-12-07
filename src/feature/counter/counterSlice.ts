import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../strore/store";
export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increamentByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});
export const {
  increment,
  decrement,
  increamentByAmount
} = counterSlice.actions;
export const increamentByAmountAsync = (amount: number) => (dispatch: any) => {
  setInterval(() => {
    dispatch(increamentByAmount(amount));
  }, 1500);
};
export const selectCount = (state: RootState) => state.counter.value;
export default counterSlice.reducer;
