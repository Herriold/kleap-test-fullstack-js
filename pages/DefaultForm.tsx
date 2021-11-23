import React from "react";
import { FormDropdown } from "./component/FormDropdown";
import Layout from "./component/Layout";

interface IFormProps {
    name: string;
    control: any;
}

const options = [
  {
    label: "Paragraph",
    value: "1",
  },
  {
    label: "RadioButton",
    value: "2",
  },
  {
    label: "CheckBox",
    value: "3",
  },
];

export const DefaulForm: React.FC<IFormProps> = ({name, control}) => {

  return (
      <div>
          <FormDropdown name={name} control={control} options={options} />
      </div>
  );
};
