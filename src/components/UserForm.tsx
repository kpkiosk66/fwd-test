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
        console.log(res.data);
        dispatch(updateCostData(res.data));
      });
    console.log("Form submitted with data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div>ข้อมูลส่วนตัว</div>
      <div className="grid grid-cols-2 my-2">
        <div className="mx-1">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="ชื่อ"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mx-1">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="surname"
            placeholder="นามสกุล"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="mx-1 my-2">
        เพศ
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="mx-1 my-2">
        วันเกิด
        <input
          className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mx-1 my-2">
        Plan type:
        <select
          name="planCode"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={formData.planCode}
          onChange={handleChange}
          required
        >
          <option value="">Select plan</option>
          <option value="T11A20">package 1 (benefit 200k)</option>
          <option value="T11A50">package 2 (benefit 500k)</option>
          <option value="T11AM1">package 3 (benefit 1M)</option>
        </select>
      </div>

      <div className="mx-1 my-2">
        Price per year:
        <input
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="premiumPerYear"
          value={formData.premiumPerYear}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mx-1 my-2">
        Payment frequency:
        <select
          name="paymentFrequency"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
      </div>
      <br />
      <button
        type="submit"
        data-testid="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export { UserForm };
