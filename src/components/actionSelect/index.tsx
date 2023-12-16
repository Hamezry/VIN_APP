import React, { useState } from "react";
import Select from "react-select";

interface Option {
  label: string;
  value: string;
  action: boolean;
}

interface ActionSelectProps {
  options: Option[];
  onSelect: (selectedAction: boolean) => void;
  label?: string;
}

const ActionSelect: React.FC<ActionSelectProps> = ({
  options,
  onSelect,
  label,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSelectChange = (selectedOption: Option | null) => {
    setSelectedOption(selectedOption);

    if (selectedOption) {
      onSelect(selectedOption.action);
    }
  };

  return (
    <div className="w-full flex flex-col gap-2 py-5">
      <label className="text-payment-black-primary font-medium text-[15px]">{label}</label>
      <Select
        unstyled
        className="mt-1"
        placeholder={'Select Option'}
        options={options}
        onChange={handleSelectChange}
        value={selectedOption}
        isSearchable={false}
        components={{
          Option: ({ children, innerProps, isFocused }) => (
            <div
              {...innerProps}
              style={{
                cursor: "pointer",
                padding: "8px",
                backgroundColor: isFocused ? "#FCF8F9" : "white", // Set your hover background color here
              }}
            >
              {children}
            </div>
          ),
        }}
        classNames={{
          control: (state) =>
            state.isFocused
              ? "ring-1 ring-payment-red1 rounded-lg p-3"
              : "border rounded-lg p-3",
          container: () =>
            "rounded-lg text-base font-body text-textgrey-normal bg-white dark:bg-afexdark-verydark",
          menu: () =>
            "mt-2 ring-1 ring-payment-red1/10 gap-5 py-1 flex flex-col gap-6 px-2 bg-white rounded-lg",
          menuList: () => "my-2 max-h-[200px] overflow-y-auto",
          placeholder: () =>
            " truncate text-textgrey-normal bg-white",
        }}
      />
    </div>
  );
};

export default ActionSelect;

