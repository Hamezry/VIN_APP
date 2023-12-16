import { useFormControls } from "../../../components/step_form";

import TextInput from "../../../components/form/input";
import ReusableComponent from "../../../components/container";
import CustomSelect from "../../../components/single_multiselect";
import { useState } from "react";
import { usePostContext } from "../../../context/post_context";
export default function ManualProcedures() {
  const decodedValues = usePostContext();
  const { prevStep } = useFormControls();
  const [selectedModule, setSelectedModule] = useState<any | null>(null);
  const [selectedGuidedFunction, setSelectedGuidedFunction] = useState<
    any | null
  >(null);
  const [selectedManualProcedure, setSelectedManualProcedure] = useState<
    any | null
  >(null);
  const [selectedFailureReason, setSelectedFailureReason] = useState<
    any | null
  >(null);
  const selectModuleData = decodedValues?.responseData.select_module.map(
    (option: { name: string }) => ({
      label: option.name,
      value: option.name,
    })
  );

  const selectGuidedFunctionData =
    decodedValues?.responseData?.guided_function.map(
      (option: { name: string }) => ({
        label: option.name,
        value: option.name,
      })
    );

  const failureReasonData = decodedValues?.responseData?.failure_reason.map(
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
              Manual Procedures
            </h1>

            <CustomSelect
              label={"Select Module"}
              options={selectModuleData}
              value={selectedModule}
              placeholder="Select Module"
              onChange={(selected: any) => setSelectedModule(selected)}
            />

            <CustomSelect
              label={"Guided Functions"}
              options={selectGuidedFunctionData}
              value={selectedGuidedFunction}
              placeholder="Guided Functions"
              onChange={(selected: any) => setSelectedGuidedFunction(selected)}
            />

            <CustomSelect
              label={"Manual Procedure"}
              options={[
                { label: "172636hw", value: "Standard" },
                { label: "1u263et62636", value: "Standard" },
              ]}
              value={selectedManualProcedure}
              placeholder="Manual Procedure"
              onChange={(selected: any) => setSelectedManualProcedure(selected)}
            />

            <CustomSelect
              label={"Failure Reason"}
              options={failureReasonData}
              value={selectedFailureReason}
              placeholder="Failure Reason"
              onChange={(selected: any) => setSelectedFailureReason(selected)}
            />

            <TextInput
              label="Function Successful"
              name="donor_vin"
              type="text"
              placeholder="Function Successful"
              id="donor_vin"
            />

            <TextInput
              label="Fault Codes"
              name="donor_vin"
              type="text"
              placeholder="Fault Codes"
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

