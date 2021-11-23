import React from "react";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

export const FormTextarea = ({ name, control, className }: FormInputProps) => {

  return (
    <Controller
      defaultValue={"Qu'est-ce qu'un TAILWIND ?"}
      name={name}
      control={control}
      render={({
        field: { onChange, value },
      }) => (
          <textarea 
              className={`${className} " w-full resize-y px-4 py-2 border rounded-md focus:outline-none" `} 
              onChange={onChange}
              value={value}
          />
      )}
    />
  );
};
