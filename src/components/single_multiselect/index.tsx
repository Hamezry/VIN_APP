import React from "react";
import Select from "react-select"; // Import appropriate types from react-select

interface CustomSelectProps {
  options: any;
  multiple?: boolean;
  value?: any;
  label?: string;
  onChange?:any
  onInputChange?: any
  isLoading?: boolean;
  isClearable?: boolean;
  placeholder?: string;
  classNames?: Record<string, (state: any) => string>;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  multiple,
  value,
  label,
  onChange,
  onInputChange,
  placeholder,
}) => {
  return (
   <div className="flex mb-5 flex-col gap-2">
    <label className=" text-lg  font-semibold text-VIN-navColor"> {label}</label>
     <Select
      unstyled
      isMulti={multiple}
      options={options}
      value={value}
      onChange={onChange}
      onInputChange={onInputChange}
    
      placeholder={placeholder}
      classNames={{
        control: (state: { isFocused: any }) =>
          state.isFocused
            ? "ring-1 ring-bg-VIN-navColor rounded-lg p-3"
            : " border border-bg-VIN-navColor rounded-lg p-3",
        container: () =>
          "rounded-lg text-base font-body text-textgrey-normal bg-white",
        menu: () =>
          " mt-2 ring-1 px-2 ring-bg-VIN-navColor  text-textgrey-normal bg-white rounded-lg",
        menuList: () =>
          "child:my-2 child:!cursor-pointer child:p-2 hover:child:bg-afexpurple-regular/10 dark:hover:child:bg-textgrey-normal/10 max-h- overflow-scroll",
        placeholder: () =>
          "capitalize truncate text-textgrey-normal bg-white dark:bg-afexdark-verydark",
      }}
    />
   </div>
  );
};

export default CustomSelect;

