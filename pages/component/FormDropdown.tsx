import React from "react";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

export const FormDropdown: React.FC<FormInputProps> = ({
  name,
  control, 
  options,
  onChangeType
}) => {

  const generateSingleOptions = () => {
    return options?.map((option: any) => {
      return (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      );
    });
  };

  return (
    <Controller
        render={({ field: { onChange, value } }) => (
            <select 
                onChange={e => {
                  onChange(e);
                  onChangeType(e);
                }} 
                value={value}
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            >
                {generateSingleOptions()}
            </select>
        )}
        control={control}
        name={name}
    />
  );
};
