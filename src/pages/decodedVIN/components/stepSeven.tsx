import { useFormControls } from "../../../components/step_form";
import TextInput from "../../../components/form/input";
import ReusableComponent from "../../../components/container";
import CustomSelect from "../../../components/single_multiselect";
import { useState } from "react";
import { usePostContext } from "../../../context/post_context";
export default function Security() {
  const decodedValues = usePostContext();
  const { prevStep } = useFormControls();

  const [selectedTools, setSelectedTools] = useState<any | null>(null);

  const [selectedSecurityPrereq, setSelectedSecurityPrereq] = useState<
    any | null
  >(null);

  const [selectedSecurityCode, setSelectedSecurityCode] = useState<any | null>(
    null
  );
  const tools = decodedValues?.responseData?.tools.map(
    (option: { tool_name: string }) => ({
      label: option.tool_name,
      value: option.tool_name,
    })
  );

  const security_prereq =
    decodedValues?.responseData?.security_prerequisites.map(
      (option: string) => ({
        label: option,
        value: option,
      })
    );

  const security_codes = decodedValues?.responseData?.security_codes.map(
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
              Security
            </h1>

            <CustomSelect
              label={"Tools Used"}
              options={tools}
              value={selectedTools}
              placeholder="Tools Used"
              onChange={(selected: any) => setSelectedTools(selected)}
            />

            <CustomSelect
              label={"Security Code Source"}
              options={security_codes}
              value={selectedSecurityCode}
              placeholder="Security Code"
              onChange={(selected: any) =>
                setSelectedSecurityCode(selected)
              }
            />
            <TextInput
              label="Module holds Key Data"
              name="vin_locked"
              type="text"
              placeholder="Module holds Key Data"
              id="vin_locked"
            />

            <CustomSelect
              label={"Prerequisites"}
              options={security_prereq}
              value={selectedSecurityPrereq}
              placeholder="Prerequisites"
              onChange={(selected: any) => setSelectedSecurityPrereq(selected)}
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

