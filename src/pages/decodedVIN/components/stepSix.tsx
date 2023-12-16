import { useFormControls } from "../../../components/step_form";

import TextInput from "../../../components/form/input";
import ReusableComponent from "../../../components/container";
import CustomSelect from "../../../components/single_multiselect";
import { useState } from "react";
import { usePostContext } from "../../../context/post_context";
export default function EEPROM() {
  const decodedValues = usePostContext();
  const { prevStep } = useFormControls();
  const [selectedTools, setSelectedTools] = useState<any | null>(null);
  const tools = decodedValues?.responseData?.tools.map(
    (option: { tool_name: string }) => ({
      label: option.tool_name,
      value: option.tool_name,
    })
  );

  return (
    <>
      <ReusableComponent>
        <div>
          <div className="mt-5 flex flex-col gap-5">
            <h1 className="text-center text-xl font-bold text-VIN-navColor py-4">
              EEPROM
            </h1>

            <TextInput
              label="Module Manufacturer"
              name="vin_locked"
              type="text"
              placeholder="Module Manufacturer"
              id="vin_locked"
            />

            <TextInput
              label="EEPROM"
              name="haardware_part"
              type="text"
              placeholder="Enter EEPROM"
              id="hardware_part"
            />

            <CustomSelect
              label={"Tools Used"}
              options={tools}
              value={selectedTools}
              placeholder="Tools Used"
              onChange={(selected: any) => setSelectedTools(selected)}
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
              label="Donor VIN"
              name="donor_vin"
              type="text"
              placeholder="Enter"
              id="donor_vin"
            />

            <TextInput
              label="Config/Immob settings different than original"
              name="donor_vin"
              type="text"
              placeholder="Enter"
              id="donor_vin"
            />

            <TextInput
              label="Upload bin Files"
              name="donor_vin"
              type="text"
              placeholder="Upload bin Files"
              id="donor_vin"
            />

            <TextInput
              label="Upload Photos"
              name="donor_vin"
              type="text"
              placeholder="Upload Photos"
              id="donor_vin"
            />

            <TextInput
              label="Notes"
              name="donor_vin"
              type="text"
              placeholder="Notes"
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

