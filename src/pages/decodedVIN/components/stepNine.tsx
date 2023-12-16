import { useFormControls } from "../../../components/step_form";

import TextInput from "../../../components/form/input";
import ReusableComponent from "../../../components/container";
import CustomSelect from "../../../components/single_multiselect";
import { useState } from "react";
import { usePostContext } from "../../../context/post_context";

export default function ADASCALIBRATION() {
    const decodedValues = usePostContext();
  const { prevStep } = useFormControls();

  const [selectedCalibration, setSelectedCalibration] = useState<
    any | null
  >(null);


  const [selectedSecurityPrereq, setSelectedPrereq] = useState<
    any | null
  >(null);

   const [selectedFailureReason, setSelectedFailureReason] = useState<
    any | null
  >(null);

   const calibration_type =
    decodedValues?.responseData?.calibration_types_available.map(
      (option: string) => ({
        label: option,
        value: option,
      })
    );

   const PrerequisitesData =
    decodedValues?.responseData?.prerequisites.map(
      (option: string) => ({
        label: option,
        value: option,
      })
    );

      const failureReasonData = decodedValues?.responseData?.failure_reason.map(
    (option: string ) => ({
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
             ADAS Calibration
            </h1>

            <CustomSelect
              label={"Calibration Type"}
              options={calibration_type}
              value={selectedCalibration}
              placeholder="Calibration Type"
              onChange={(selected: any) =>
                setSelectedCalibration(selected)
              }
            />

               <CustomSelect
              label={"Prerequisites"}
              options={PrerequisitesData}
              value={selectedSecurityPrereq}
              placeholder="Prerequisites"
              onChange={(selected: any) =>
                setSelectedPrereq(selected)
              }
            />
         

            <TextInput
              label="Calibration Successful"
              name="donor_vin"
              type="text"
              placeholder="Calibration Successful"
              id="donor_vin"
            />

            <CustomSelect
              label={"Failure Reason"}
              options={failureReasonData}
              value={selectedFailureReason}
              placeholder="Failure Reason"
              onChange={(selected: any) =>
                setSelectedFailureReason(selected)
              }
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

