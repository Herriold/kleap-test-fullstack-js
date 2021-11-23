import React from "react";

interface FormLabelProps {
    children: any;
}

export const FormLabel = ({ children }: FormLabelProps) => {
  return (
    <label className="block text-gray-700 text-sm font-bold mb-2">
        {children}
    </label>
  );
};
