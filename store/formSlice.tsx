import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../shared/types";
// user: name, surname, genderCd, dob, planCode, premiumPerYear, paymentFrequency

const initialState: UserData = {
  name: "",
  surname: "",
  gender: "",
  dob: "",
  planCode: "",
  premiumPerYear: 0,
  paymentFrequency: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<Partial<UserData>>) => {
      return { ...state, ...action.payload };
    },
    resetFormData: () => {
      return initialState;
    },
  },
});

export const { updateFormData, resetFormData } = formSlice.actions;
export default formSlice.reducer;
