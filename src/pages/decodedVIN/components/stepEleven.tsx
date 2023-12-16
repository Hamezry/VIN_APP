import { useFormControls } from "../../../components/step_form";

import TextInput from "../../../components/form/input";
import ReusableComponent from "../../../components/container";

export default function Results() {
  const { prevStep } = useFormControls();

  return (
    <>
      <ReusableComponent>
        <div>
          <div className="mt-5 flex flex-col gap-5">
            <h1 className="text-center text-xl font-bold text-VIN-navColor py-4">
              Customer
            </h1>

            <TextInput
              label="Customer"
              name="donor_vin"
              type="text"
              placeholder="Enter Customer"
              id="donor_vin"
            />

            <TextInput
              label="Nature of Repair"
              name="donor_vin"
              type="text"
              placeholder="Nature of Repair"
              id="donor_vin"
            />

            <TextInput
              label="Customer Request"
              name="donor_vin"
              type="text"
              placeholder="Customer Request"
              id="donor_vin"
            />
          </div>
        </div>
        <div className="flex w-[40%] mx-auto items-center gap-6 justify-center mb-10 mt-28">
          <button
            className="w-full bg-VIN-navColor/10 text-VIN-navColor p-4 rounded-md"
            type="button"
            onClick={prevStep}
          >
            prev
          </button>
          <button
            className="w-full bg-VIN-navColor text-VIN-textWhite p-4 rounded-md"
            type="submit"
          >
            next
          </button>
        </div>
      </ReusableComponent>
    </>
  );
}

