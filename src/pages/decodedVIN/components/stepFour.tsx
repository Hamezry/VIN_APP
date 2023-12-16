import { useFormControls } from "../../../components/step_form";

import TextInput from "../../../components/form/input";
import ReusableComponent from "../../../components/container";

export default function ModuleOrigin() {
  const { prevStep } = useFormControls();

  return (
    <>
      <ReusableComponent>
        <div>
          <div className="mt-5 flex flex-col gap-5">
            <h1 className="text-center text-xl font-bold text-VIN-navColor py-4">
              Module Origin
            </h1>

            <TextInput
              label="Hardware Part"
              name="hardware_part"
              type="text"
              placeholder="Enter"
              id="hardware_part"
            />

            <TextInput
              label="Software Part"
              name="software_part"
              type="text"
              placeholder="Enter"
              id="software_part"
            />

            <TextInput
              label="Programming Time"
              name="programming_time"
              type="text"
              placeholder="Enter"
              id="programming_time"
            />

            <TextInput
              label="USB Programming"
              name="usb_programming_time"
              type="text"
              placeholder="Enter"
              id="usb_programming_time"
            />

            <TextInput
              label="File Purchase"
              name="file_purchase"
              type="text"
              placeholder="Enter"
              id="file_purchase"
            />

               <TextInput
              label="Notes"
              name="notes"
              type="text"
              placeholder="Enter"
              id="notes"
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

