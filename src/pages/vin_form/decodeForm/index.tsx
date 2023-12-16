import Button from "../../../components/button";
import TextInput from "../../../components/form/input";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { usePost } from "../../../lib/usePost";

export default function VinForm() {
  const navigate = useNavigate();
  const { mutate, isLoading, } = usePost({
    url: "run-vehicle-identification-number",
    callback,
    invalidateQuery: [],
  });

  function submit(values: {}) {
    const payload = {
      ...values,
    };

    mutate(payload);
   
  }

  function callback() {
   navigate("/decoded_vin");

  }

  return (
    <div>
      <Formik
        initialValues={{ vin_number: "" }}
        onSubmit={async (values) => {
          const _payload = {
            vin_number: values.vin_number,
          };

          submit(_payload);
        }}
        validationSchema={Yup.object({
          vin_number: Yup.string().required("Vin number is required"),
        })}
      >
        <div className="w-full p-10 z-40">
          <Form className="w-[80%]  p-8 space-y-4 m-auto rounded-xl z-[2] relative">
            <div className="w-full flex flex-col gap-6 border p-5">
              <TextInput
                id="vin_number"
                name="vin_number"
                type="text"
                autocomplete="text"
                autoFocus
                placeholder="Enter vin number"
                label="VIN Number"
              />
              <TextInput
                id="odometer_number"
                name="odometer_number"
                type="text"
                placeholder="Odometer number"
                label="Odometer number"
              />

              <div className=" w-[600px] self-center flex items-center justify-center py-5 flex-col pt-4 px-48">
                <Button
                  type="submit"
                  // onClick={()=>{navigate("/decoded_vin")}}
                  text={
                    <span className="flex text-lg items-center space-x-6">
                      Decode
                    </span>
                  }
                  loading={isLoading}
                />
              </div>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
}
