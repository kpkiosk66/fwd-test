import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { updateFormData, resetFormData } from "../../store/formSlice";
import formReducer from "../../store/formSlice";
import { UserForm } from "./UserForm";

const initialState = {
  form: {
    name: "",
    surname: "",
    gender: "",
    dob: "",
    planCode: "",
    premiumPerYear: 0,
    paymentFrequency: "",
  },
};

describe("formSlice", () => {
  const updatedState = {
    name: "Testname",
    surname: "Testsurname",
    gender: "Male",
    dob: "30/01/1998",
    planCode: "T11A20",
    premiumPerYear: 30000,
    paymentFrequency: "YEARLY",
  };
  it("should update the form", () => {
    const newState = formReducer(
      initialState.form,
      updateFormData(updatedState)
    );
    expect(newState).toStrictEqual(updatedState);
  });
  it("should reset the form", () => {
    const newState = formReducer(initialState.form, resetFormData());
    expect(newState).toStrictEqual(initialState.form);
  });
});

describe("UserForm component", () => {
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it("should renders the component", () => {
      const { getByText } = render(
    <Provider store={store}>
      <UserForm />
    </Provider>
  );
    const textElement = getByText(/ข้อมูลส่วนตัว/);
    expect(textElement).toBeInTheDocument();
  });
});
