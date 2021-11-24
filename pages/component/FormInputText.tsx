import React from "react";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

export const FormInputText = ({ name, control, className, defaultValue }: FormInputProps) => {
  const defaultValueLabel = "What do you want to do ?";

  return (
    <Controller
      defaultValue={defaultValue ? defaultValue : defaultValueLabel}
      name={name}
      control={control}
      render={({
        field: { onChange, value },
      }) => (
          <input 
              value={value}
              className={`${className} " shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "`}
              type="text" 
              placeholder="Your form question" 
              onChange={onChange}
          />
      )}
    />
  );
};
