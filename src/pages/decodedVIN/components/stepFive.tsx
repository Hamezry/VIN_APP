import { useFormControls } from "../../../components/step_form";

import TextInput from "../../../components/form/input";
import ReusableComponent from "../../../components/container";
import CustomSelect from "../../../components/single_multiselect";
import { useState } from "react";
import { usePostContext } from "../../../context/post_context";
export default function ModuleReplacement() {
  const decodedValues = usePostContext();
  const { prevStep } = useFormControls();

  const [selectedPrerequisites, setSelectedPrerequisites] = useState<
    any | null
  >(null);

  const prerequisitesData = decodedValues?.responseData?.prerequisites.map(
    (option: string) => ({
      label: option,
      value: option,
    })
  );
  return (
    <>
      <ReusableComponent>
        <div>
          <div className="mt-5 flex flex-col gap-5">
            <h1 className="text-center text-xl font-bold text-VIN-navColor py-4">
              Module Replacement
            </h1>

            <TextInput
              label="VIN Locked"
              name="vin_locked"
              type="text"
              placeholder="VIN Locked"
              id="vin_locked"
            />

            <TextInput
              label="Hardware Part"
              name="haardware_part"
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

            <CustomSelect
              label={"Prerequisites"}
              options={prerequisitesData}
              value={selectedPrerequisites}
              placeholder="Prerequisites"
              onChange={(selected: any) => setSelectedPrerequisites(selected)}
            />

            <TextInput
              label="EEPROM or Special Process?"
              name="donor_vin"
              type="text"
              placeholder="EEPROM or Special Process?"
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

