import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { quotationProduct } from "../shared/types";

const initialState: quotationProduct = {
       productId: '',
       productTypeCd: '',
       productFamilyCd: '',
       baseSumAssured: 0,
       baseAnnualPremium: 0,
       productTerm: 0,
       premiumPayingTerm: 0,
       paymentFrequencyCd: '',
       planCode: '',
       annualizedModalPremium: 0,
       modalPremium: 0,
       selected: true
     };


const costSlice = createSlice({
  name: "cost",
  initialState,
  reducers: {
    updateCostData: (state, action: PayloadAction<Partial<quotationProduct>>) => {
      return { ...state, ...action.payload };
    },
    resetCostData: () => {
      return initialState;
    },
  },
});

export const { updateCostData, resetCostData } = costSlice.actions;

export default costSlice.reducer;
