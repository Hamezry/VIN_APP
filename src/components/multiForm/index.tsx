import React, { useState, ChangeEvent } from "react";

interface Form {
  status: string;
  attached_to: string;
  QR_Variant_ID_code: string;
}

interface MultiFormProps {
  addButtonText: string;
  deleteButtonText: string;
}

const MultiFormComponent: React.FC<MultiFormProps> = ({
  addButtonText,
  deleteButtonText,
}) => {
  const [forms, setForms] = useState<Form[]>([]);

  const addForm = () => {
    setForms([
      ...forms,
      { status: "", attached_to: "", QR_Variant_ID_code: "" },
    ]);
  };

  const deleteForm = (index: number) => {
    const updatedForms = [...forms];
    updatedForms.splice(index, 1);
    setForms(updatedForms);
  };

  const handleInputChange = (
    index: number,
    inputName: keyof Form,
    value: string
  ) => {
    const updatedForms = [...forms];
    updatedForms[index][inputName] = value;
    setForms(updatedForms);
  };

  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex justify-center">
        {" "}
        <button type="button"
          className=" bg-VIN-navColor p-3 text-white rounded-md"
          onClick={addForm}
        >
          {addButtonText}
        </button>
      </div>

      {forms.map((form, index) => (
        <div className=" flex flex-col gap-4 py-4 px-10 border" key={index}>
          <div className="w-full flex flex-col gap-4 p-6">
            {" "}
            <input
              className="block w-full appearance-none outline-none bg-white tracking-wider rounded-lg ring-1 ring-[#DAD9DA]  focus:ring-2 h-16 xl:h-16 transition duration-150 py-3 px-4"
              type="text"
              placeholder="Status"
              value={form.status}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange(index, "status", e.target.value)
              }
            />
            <input
              className="block w-full appearance-none outline-none bg-white tracking-wider rounded-lg ring-1 ring-[#DAD9DA]  focus:ring-2 h-16 xl:h-16 transition duration-150 py-3 px-4"
              type="text"
              placeholder="Attached to"
              value={form.attached_to}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange(index, "attached_to", e.target.value)
              }
            />
            <input
              className="block w-full appearance-none outline-none bg-white tracking-wider rounded-lg ring-1 ring-[#DAD9DA]  focus:ring-2 h-16 xl:h-16 transition duration-150 py-3 px-4"
              type="text"
              placeholder="QR_Variant Or ID_code"
              value={form.QR_Variant_ID_code}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleInputChange(index, "QR_Variant_ID_code", e.target.value)
              }
            />
          </div>

          <div className=" flex justify-center">
            <button type="button"
              className=" bg-VIN-navColor p-3 text-white rounded-md"
              onClick={() => deleteForm(index)}
            >
              {deleteButtonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultiFormComponent;

