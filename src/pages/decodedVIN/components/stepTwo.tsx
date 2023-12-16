import { useFormControls } from "../../../components/step_form";
import CustomSelect from "../../../components/single_multiselect";
import MultiFormComponent from "../../../components/multiForm";
import ReusableComponent from "../../../components/container";
import { usePostContext } from "../../../context/post_context";
import { useState } from "react";
import ActionSelect from "../../../components/actionSelect";

export default function ModuleAndComponent() {
  const decodedValues = usePostContext();
  const [selectedModule, setSelectedModule] = useState<any | null>(null);
  const [selectedModuleStatus, setSelectedModuleStatus] = useState<any | null>(
    null
  );
  const [selectedComponent, setSelectedComponent] = useState<any | null>(null);
  const [selectedComponentStatus, setSelectedComponentStatus] = useState<
    any | null
  >(null);
  const [selectedModuleIntegration, setSelectedModuleIntegration] = useState<
    any | null
  >(null);
  const [showComponent, setShowComponent] = useState<boolean>(true);
  const [showMultiForm, setShowMultiForm] = useState<boolean>(false);

  const handleSelect = (selectedAction: boolean) => {
    setShowComponent(selectedAction);
  };

  const handleShowMultiForm = (selectedAction: boolean) => {
    setShowMultiForm(selectedAction);
  };
  const { prevStep } = useFormControls();
  const options = [
    { label: "Module", value: "show", action: true },
    { label: "Component", value: "hide", action: false },
  ];

  const option2 = [
    { label: "Yes", value: "show", action: true },
    { label: "No", value: "hide", action: false },
  ];

  const option3 = [
    { label: "Yes", value: "show", action: true },
    { label: "No", value: "hide", action: false },
  ];

  const selectModuleData = decodedValues?.responseData.select_module.map(
    (option: { name: string }) => ({
      label: option.name,
      value: option.name,
    })
  );

  const moduleStatusData = decodedValues?.responseData?.module_status.map(
    (option: string) => ({
      label: option,
      value: option,
    })
  );

  const componentsData = decodedValues?.responseData?.components.map(
    (option: string) => ({
      label: option,
      value: option,
    })
  );

    const componentStatusData = decodedValues?.responseData?.compoenent_status.map(
    (option: string) => ({
      label: option,
      value: option,
    })
  );

//   const componentAttachedData = decodedValues?.responseData?.component_attached_to
// .map(
//     (option: string) => ({
//       label: option,
//       value: option,
//     })
//   );


  return (
    <>
      <ReusableComponent>
        <div>
          <h2 className="text-2xl font-bold text-VIN-navColor py-4 text-center">
            Module & Component Section
          </h2>

          <ActionSelect
            label={"Select"}
            options={options}
            onSelect={handleSelect}
          />

          {/* MODULE SELECT */}
          {showComponent && (
            <div className="mt-5">
              <h1 className="text-center text-xl font-bold text-VIN-navColor py-4">
                Module Selection
              </h1>
              <CustomSelect
                label={"Select Module"}
                options={selectModuleData}
                value={selectedModule}
                placeholder="Select module"
                onChange={(selected: any) => setSelectedModule(selected)}
                multiple
              />

              <CustomSelect
                label={"Module Status"}
                options={moduleStatusData}
                value={selectedModuleStatus}
                placeholder="Select module status"
                onChange={(selected: any) => setSelectedModuleStatus(selected)}
              />

              <CustomSelect
                label={"Module Integration"}
                options={[
                  { label: "Yes", value: "Standard" },
                  { label: "No", value: "Standard" },
                ]}
                value={selectedModuleIntegration}
                placeholder="Select"
                onChange={(selected: any) =>
                  setSelectedModuleIntegration(selected)
                }
              />

              <CustomSelect
                label={"Module QR/ID Code"}
                options={[
                  { label: "172636hw", value: "Standard" },
                  { label: "1u263et62636", value: "Standard" },
                ]}
                value={selectedModuleIntegration}
                placeholder="Select"
                onChange={(selected: any) =>
                  setSelectedModuleIntegration(selected)
                }
              />

              <ActionSelect
                options={option2}
                label={"Module is plug and Play"}
                onSelect={() => {
                  console.log("hey");
                }}
              />
            </div>
          )}
          {/* COMPONENT SELECT */}
          {!showComponent && (
            <div className="mt-5">
              <h1 className="text-center text-xl font-bold text-VIN-navColor py-4">
                Component Selection
              </h1>
              <CustomSelect
                label={"Select Component"}
                options={componentsData}
                value={selectedComponent}
                placeholder="Select Component"
                onChange={(selected: any) => setSelectedComponent(selected)}
                multiple
              />

              <CustomSelect
                label={"Component Status"}
                options={componentStatusData}
                value={selectedComponentStatus}
                placeholder="Select Component status"
                onChange={(selected: any) =>
                  setSelectedComponentStatus(selected)
                }
              />

              <CustomSelect
                label={"Component Integration"}
                options={[
                  { label: "Yes", value: "Standard" },
                  { label: "No", value: "Standard" },
                ]}
                value={selectedModuleIntegration}
                placeholder="Select"
                onChange={(selected: any) =>
                  setSelectedModuleIntegration(selected)
                }
              />

              <CustomSelect
                label={"Component QR/ID Code"}
                options={[
                  { label: "172636hw", value: "Standard" },
                  { label: "1u263et62636", value: "Standard" },
                ]}
                value={selectedModuleIntegration}
                placeholder="Select"
                onChange={(selected: any) =>
                  setSelectedModuleIntegration(selected)
                }
              />

              <ActionSelect
                options={option2}
                label={"Component is plug and Play"}
                onSelect={() => {
                  console.log("hey");
                }}
              />
              <ActionSelect
                options={option3}
                label={"Add Associated Components being replaced"}
                onSelect={handleShowMultiForm}
              />
              {showMultiForm && (
                <MultiFormComponent
                  addButtonText="Add Component"
                  deleteButtonText="Delete"
                />
              )}
            </div>
          )}
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

