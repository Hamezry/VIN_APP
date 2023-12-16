import { VINForm,
  //  useFormControls
   } from "../../components/step_form";
// import * as yup from "yup";

import StepOne from "./components/stepOne";
import StepTwo from "./components/stepTwo";
import StepThree from "./components/stepThree";
import StepFour from "./components/stepFour";
import StepFive from "./components/stepFive";
import StepSix from "./components/stepSix";
import StepSeven from "./components/stepSeven";
import StepEight from "./components/stepEight";
import StepNine from "./components/stepNine";
import StepTen from "./components/stepTen";
import StepEleven from "./components/stepEleven";

const DecodeVIN = () => {
  return (
    <div className="w-full flex flex-col gap-8 overflow-y-scroll h-[100vh] md:py-10 py-14 px-2 md:px-14">
      <div className="flex w-full md:justify-between items-center">
        <h2 className=" text-textgrey-darker dark:text-afexdark-extralight  text-[14px] md:text-[18px] font-bold ">
          Decoded VIN
        </h2>
      </div>
   
      <VINForm initialValues={{ token: "", odometer: "" }} onSubmit={() => {}}>
        {/* STEP ONE */}
        <VINForm.Step>
          <StepOne />
        </VINForm.Step>

        {/* STEP TWO */}
        <VINForm.Step>
          <StepTwo />
        </VINForm.Step>

        {/* STEP THREE */}
        <VINForm.Step>
          <StepThree />
        </VINForm.Step>

        {/* STEP FOUR */}
        <VINForm.Step>
          <StepFour />
        </VINForm.Step>

        {/* STEP FIVE */}
        <VINForm.Step>
          <StepFive />
        </VINForm.Step>

        {/* STEP SIX */}
        <VINForm.Step>
          <StepSix />
        </VINForm.Step>

        {/* STEP SEVEN */}
        <VINForm.Step>
          <StepSeven />
        </VINForm.Step>

        {/* STEP EIGHT */}
        <VINForm.Step>
          <StepEight />
        </VINForm.Step>

        {/* STEP NINE */}
        <VINForm.Step>
          <StepNine />
        </VINForm.Step>

        {/* STEP TEN */}
        <VINForm.Step>
          <StepTen />
        </VINForm.Step>

        {/* STEP ELEVEN */}
        <VINForm.Step>
          <StepEleven />
        </VINForm.Step>
      </VINForm>
    </div>
  );
};

export default DecodeVIN;

