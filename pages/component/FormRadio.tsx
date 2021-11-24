import React from "react";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
import { FormInputText } from "./FormInputText";

interface FormRadioProps {
  name: string;
  control: any;
  setValue?: any;
  parentId?: Number;
}

const options = [
  {
    label: "Radio Option 1",
    value: "1",
  },
  {
    label: "Radio Option 2",
    value: "2",
  },
  {
    label: "Radio Option 3",
    value: "3",
  }
];

export const FormRadio: React.FC<FormRadioProps> = ({
  name,
  control,
  parentId
}) => {
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
        <label className="inline-flex items-center mt-3" key={singleOption.value}>
            <input type="radio" name="radio" className="form-radio h-5 w-5 text-green-600" value={singleOption.value} />
            <FormInputText 
                name={`inputRadio[${parentId}].${singleOption.value}`}
                control={control}
                className="ml-2 w-2/4"
                defaultValue={singleOption.label}
              />
        </label>
    ));
  };

  return (
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange },
        }) => (
          <div className="flex flex-col" onChange={onChange}>
            {generateRadioOptions()}
          </div>
        )}
      />
  );
};
