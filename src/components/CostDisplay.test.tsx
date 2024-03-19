import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { updateCostData, resetCostData } from "../../store/costSlice";
import costReducer from "../../store/costSlice";
import { CostDisplay } from "./CostDisplay";

const initialState = {
  cost: {
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
     },
};

describe("costSlice", () => {
  const updatedState = {
       productId: 'ECOMMBIG3',
       productTypeCd: 'PLAN',
       productFamilyCd: 'TERM',
       baseSumAssured: 1941748,
       baseAnnualPremium: 30000,
       productTerm: 5,
       premiumPayingTerm: 5,
       paymentFrequencyCd: 'YEARLY',
       planCode: 'T11A20',
       annualizedModalPremium: 30000,
       modalPremium: 30000,
       selected: true
     }
  ;
  it("should update the cost", () => {
    const newState = costReducer(
      initialState.cost,
      updateCostData(updatedState)
    );
    expect(newState).toStrictEqual(updatedState);
  });
  it("should reset the cost", () => {
    const newState = costReducer(initialState.cost, resetCostData());
    expect(newState).toStrictEqual(initialState.cost);
  });
});

describe("CostDisplay component", () => {
  it("should renders the component", () => {
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <CostDisplay />
      </Provider>
    );
    const textElement = getByText(/ผลประโยชน์ที่ได้รับ/);
    expect(textElement).toBeInTheDocument();
  });
});
