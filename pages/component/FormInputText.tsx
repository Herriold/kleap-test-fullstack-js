import React, { useEffect } from "react";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

export const FormInputText = ({ name, control, className }: FormInputProps) => {


  return (
    <Controller
      defaultValue={"Qu\'est-ce qu\'un REACT JS ?"}
      name={name}
      control={control}
      render={({
        field: { onChange, value },
      }) => (
          <input 
              value={value}
              className={`${className} " w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "`}
              type="text" 
              placeholder="Username" 
              onChange={onChange}
          />
      )}
    />
  );
};
