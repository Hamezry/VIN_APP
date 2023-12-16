import { useFormControls } from "../../../components/step_form";
import { ImageUpload } from "../../../components/form/uploadImage";
import ReusableComponent from "../../../components/container";
import CustomSelect from "../../../components/single_multiselect";
import { useState } from "react";
import { usePostContext } from "../../../context/post_context";
export default function Uploads() {
  const decodedValues = usePostContext();
  const { prevStep } = useFormControls();

  const [selectedPositionStatement, setSelectedPositionStatement] = useState<
    any | null
  >(null);

  const positionStatementData =
    decodedValues?.responseData?.position_statement.map(
      (option: { summary: string; type: string }) => ({
        label: option.summary,
        value: option.type,
      })
    );

  return (
    <>
      <ReusableComponent>
        <div>
          <div className="mt-5 flex flex-col gap-5">
            <h1 className="text-center text-xl font-bold text-VIN-navColor py-4">
              Uploads
            </h1>

            <CustomSelect
              label={"Select Position Statement"}
              options={positionStatementData}
              value={selectedPositionStatement}
              placeholder="Select Position Statement"
              onChange={(selected: any) =>
                setSelectedPositionStatement(selected)
              }
            />

            <ImageUpload
              id="upload_target_settings"
              name="upload_target_settings"
              accept={[".jpg", ".png"]}
              file_limit={1}
              label="Upload Target Settings"
              square
            />

            <ImageUpload
              id="upload_supporting_docs"
              name="upload_supporting_docs"
              accept={[".jpg", ".png"]}
              file_limit={1}
              label="Upload Supporting Docs"
              square
            />

            <ImageUpload
              id="photo"
              name="photo"
              accept={[".jpg", ".png"]}
              file_limit={1}
              label="Upload Photos"
              square
            />

            <ImageUpload
              id="screen_shot"
              name="screen_shot"
              accept={[".jpg", ".png"]}
              file_limit={1}
              label="Select Screenshot to Attach"
              square
            />

            <ImageUpload
              id="scan_doc"
              name="scan_doc"
              accept={[".jpg", ".png"]}
              file_limit={1}
              label="Attach Scan Documents"
              square
            />

            <ImageUpload
              id="training_process"
              name="training_process"
              accept={[".jpg", ".png"]}
              file_limit={1}
              label="Upload Attach Screenshot Training Process"
              square
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

