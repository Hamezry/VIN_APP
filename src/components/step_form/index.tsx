

import {
  type FormikConfig,
  type FormikValues,
  type FormikProps,
  Formik,
  Form as FormikForm,
} from 'formik';
import React, { ReactNode, useRef, useState } from 'react';
import { FormStep, type FormStepInterface } from './step';

import { FormControlContext, useFormStepper } from './controls';

interface FormProps extends FormikConfig<any> {
  className?: string;
}

export function VINForm({ children, className, ...props }: FormProps) {
  const formikRef = useRef<FormikProps<FormikValues>>(null);
  const childrenArray = React.Children.toArray(
    children as ReactNode | ReactNode[],
  ) as Array<React.ReactElement<FormStepInterface>>;
  const [currentStep, setCurrentStep] = useState(0);

  const currentChild = childrenArray[
    currentStep
  ] as React.ReactElement<FormStepInterface>;

  const isLastStep = () => {
    return currentStep === childrenArray.length - 1;
  };

  const isFirstStep = () => {
    return currentStep === 0 || childrenArray.length === 1;
  };

  const nextStep = () => {
    if (isLastStep()) return;
    setCurrentStep((s) => s + 1);
  };

  const prevStep = () => {
    if (isFirstStep()) return;
    setCurrentStep((s) => s - 1);
  };

  return (
    <Formik
      {...props}
      innerRef={formikRef}
      onSubmit={async (values, actions) => {
        if (isLastStep()) await props.onSubmit(values, actions);
        else nextStep();
      }}
      validationSchema={
        currentChild.props.validationSchema || props.validationSchema
      }>
      <FormControlContext.Provider value={{ nextStep, prevStep }}>
        <FormikForm className={className}>{currentChild}</FormikForm>
      </FormControlContext.Provider>
    </Formik>
  );
}

VINForm.Step = FormStep;
VINForm.useFormStepper = useFormStepper;

export const useFormControls = useFormStepper;
