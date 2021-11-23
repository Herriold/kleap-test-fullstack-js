import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

const options = [
  {
    label: "Checkbox Option 1",
    value: "1",
  },
  {
    label: "Checkbox Option 2",
    value: "2",
  },
];

export const FormMultiCheckbox: React.FC<FormInputProps> = ({
  name,
  control,
  setValue
}) => {
  const [selectedOptions, setSelectedOptions] = useState<any>([]);

  const handleSelect = (value: any) => {
    const isPresent = selectedOptions.indexOf(value);
    if (isPresent !== -1) {
      const remaining = selectedOptions.filter((item: any) => item !== value);
      setSelectedOptions(remaining);
    } else {
      setSelectedOptions((prevItems: any) => [...prevItems, value]);
    }
  };

  useEffect(() => {
    setValue(name, selectedOptions);
  }, [selectedOptions]);

  return (
    <div className="flex flex-col">
        {options.map((option: any) => {
          return (
            <Controller
                key={option.value}
                name={name}
                render={({}) => {
                return (
                    <label className="inline-flex items-center mt-3">
                        <input 
                            type="checkbox" 
                            className="form-checkbox h-5 w-5 text-green-600" 
                            checked={selectedOptions.includes(option.value)}
                            onChange={() => handleSelect(option.value)}
                        />
                        <span className="ml-2 text-gray-700">{option.label}</span>
                    </label>
                );
                }}
                control={control}
            />
          );
        })}
      </div>
  );
};
