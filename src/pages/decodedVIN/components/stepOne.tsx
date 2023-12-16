// import * as yup from "yup";
import CustomSelect from "../../../components/single_multiselect";
import Table from "../../../components/table";
import ReusableComponent from "../../../components/container";
import { useState } from "react";
import { usePostContext } from "../../../context/post_context";

interface UserData {
  properties: string;
  value: string;
}

export default function FormStep1() {
  const [selectedOption, setSelectedOption] = useState<any | null>(null);
  const decodedValues = usePostContext();

  const _decodedData: UserData[] = (
    decodedValues?.responseData?.decoded_data
      ? Object.entries(decodedValues.responseData.decoded_data)
      : []
  ).map(([key, value]) => ({
    properties: key,
    value: value as string,
  }));

  const columns = [
    { key: "properties", header: "Spec" },
    { key: "value", header: "Value" },
  ] as { key: keyof UserData; header: string }[];

  const optional_selection =
    decodedValues?.responseData?.optional_selection.map((option: string) => ({
      label: option,
      value: option,
    }));

  return (
    <>
      <ReusableComponent>
        <div>
          <h2 className="text-2xl font-bold text-VIN-navColor py-4 text-center">
            Decoded VINs
          </h2>
          <div className="h-[500px] ">
            <Table columns={columns} data={_decodedData} />
          </div>

          <CustomSelect
            options={optional_selection}
            value={selectedOption}
            placeholder="Select multiple options"
            onChange={(selectedOption: any) => {
              setSelectedOption(selectedOption);
        
            }}
            multiple
          />
        </div>
        <div className="flex w-[40%] mx-auto items-center gap-6 justify-center mb-10 mt-28">
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

