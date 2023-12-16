import { useFormControls } from "../../../components/step_form";
import CustomSelect from "../../../components/single_multiselect";
import TextInput from "../../../components/form/input";
import ReusableComponent from "../../../components/container";
import { useState } from "react";
 import { usePostContext } from "../../../context/post_context";

export default function Tools() {
    const decodedValues = usePostContext();
  const [selectedScanTools, setSelectedScanTools] = useState<any | null>(null);
  const [selectedSoftwares, setSelectedSoftwares] = useState<any | null>(
    null
  );
  const [selectedModuleIntegration, setSelectedModuleIntegration] = useState<
    any | null
  >(null);

  const { prevStep } = useFormControls();

    const scan_tools_data =
    decodedValues?.responseData?.scantools.map((option: string) => ({
      label: option,
      value: option,
    }));
      const softwares =
    decodedValues?.responseData?.softwares.map((option:{name: string}) => ({
      label: option.name,
      value: option.name,
    }));

  return (
    <>
      <ReusableComponent>
        <div>
          <div className="mt-5 flex flex-col gap-5">
            <h1 className="text-center text-xl font-bold text-VIN-navColor py-4">
              Tools
            </h1>
            <CustomSelect
              label={"Scan Tools"}
              options={scan_tools_data}
              value={selectedScanTools}
              placeholder="Select Scan Tools(N/A)"
              onChange={(selected: any) => setSelectedScanTools(selected)}
              multiple
            />

            <CustomSelect
              label={"Software"}
              options={softwares}
              value={selectedSoftwares}
              placeholder="Select Software"
              onChange={(selected: any) => setSelectedSoftwares(selected)}
            />
            <TextInput label="SW Version" name="sw_version" type="text" placeholder="Enter SW Version" id="sw_version"/>

            <CustomSelect
              label={"Targets"}
              options={[
                { label: "Yes", value: "Standard" },
                { label: "No", value: "Standard" },
              ]}
              value={selectedModuleIntegration}
              placeholder="Select Targets"
              onChange={(selected: any) =>
                setSelectedModuleIntegration(selected)
              }
            />

          <TextInput label="Web browser" name="web_browser" type="text" placeholder="Web browser" id="web_browser"/>
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

