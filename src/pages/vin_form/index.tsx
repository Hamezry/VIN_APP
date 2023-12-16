import VinForm from "./decodeForm";


const VINForm = () => {
  return (
    <div className="w-full flex flex-col gap-8 overflow-y-scroll h-[100vh] md:py-10 py-14 px-2 md:px-14">
      <div className="flex w-full md:justify-between items-center">
        <h2 className=" text-textgrey-darker dark:text-afexdark-extralight  text-[14px] md:text-[18px] font-bold ">
          DecodeVIN
        </h2>
      </div>
    <VinForm/>
    </div>
  );
};

export default VINForm;

