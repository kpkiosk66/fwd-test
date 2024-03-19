import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../store/formSlice";
import { updateCostData } from "../../store/costSlice";
import { AxiosResponse } from "axios";
import instance from "../../shared/axios";
import { quotationProduct, UserData } from "../../shared/types";

type RootState = {
  form: UserData;
};

const UserForm: React.FC = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    instance
      .post("/premium/calculate", formData)
      .then((res: AxiosResponse<quotationProduct>) => {
        console.log(res.data)
        dispatch(updateCostData( res.data ));
      });
    console.log("Form submitted with data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>ข้อมูลส่วนตัว</div>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Surname:
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Gender:
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <br />
      <label>
        DOB:
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Plan type:
        <select
          name="planCode"
          value={formData.planCode}
          onChange={handleChange}
          required
        >
          <option value="">Select plan</option>
          <option value="T11A20">package 1 (benefit 200k)</option>
          <option value="T11A50">package 2 (benefit 500k)</option>
          <option value="T11AM1">package 3 (benefit 1M)</option>
        </select>
      </label>
      <br />
      <label>
        Price per year:
        <input
          type="number"
          name="premiumPerYear"
          value={formData.premiumPerYear}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Payment frequency:
        <select
          name="paymentFrequency"
          value={formData.paymentFrequency}
          onChange={handleChange}
          required
        >
          <option value="">Select plan</option>
          <option value="YEARLY">YEARLY</option>
          <option value="HALFYEARLY">HALFYEARLY</option>
          <option value="QUARTERLY">QUARTERLY</option>
          <option value="MONTHLY">MONTHLY</option>
        </select>
      </label>
      <br />
      <button type="submit" data-testid="submit">
        Submit
      </button>
    </form>
  );
};

export { UserForm };
