import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormDropdown } from './component/FormDropdown';
import { FormInputText } from './component/FormInputText';
import { FormMultiCheckbox } from './component/FormMultiCheckbox';
import { FormRadio } from './component/FormRadio';
import { FormTextarea } from './component/FormTextarea';
import Layout from './component/Layout';
import { useAppDispatch, useAppSelector } from './reducers/hooks';
import { increment, selectCount } from './reducers/increment';

const defaultValues = {
  textValue: "",
  radioValue: "",
  checkboxValue: [],
  dropdownValue: "",
  inputValue: ""
};

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


const Home: NextPage = () => {
  const methods = useForm<any>({ defaultValues: defaultValues });
  const { handleSubmit, control, setValue } = methods;
  const [typeForms, setTypeForms] = useState<any>([1,1,1]);
  const [isFocus, setFocus] = useState<any>();
  const [selected, setSelected] = useState<Number>(0);
  const focusRef = useRef<any>([]);


  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const defaultRow = Array.from(Array(count).keys());

  useEffect(()=> {
    setTypeForms(defaultRow);
  }, [count])


  const onSubmit = (data: any) => {
    console.log(data);
  }

  const handleSave = (event: any) => {
    event.stopPropagation();
    setFocus(-1);
  }

  const onChangeType = (event: any, id:any) => {
    event.preventDefault();
    setTypeForms(typeForms.map((item: any, index:any)=> (index===id ?  Number(event.target.value) : item)));
  }

  const handleOnClick = (event: any, id: any) => {
    if (focusRef.current[id].contains(event.target)) {
      setFocus(id);
      setSelected(id);
    }
  }


  return (
    <Layout>
      <div className="flex justify-end items-end  mt-6 w-3/4">
        <button type="button" onClick={() => dispatch(increment())} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
          Add Form
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col mx-auto mt-8 justify-center items-center bg-gray-100">
        {defaultRow.map(i => (
          <div 
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/4" 
            ref={el=> focusRef.current[i] = el} 
            onClick={e=> handleOnClick(e, i)} 
            key={i}>
            <div className="flex justify-between">
              <div className="mb-4 w-2/4">
                <FormInputText 
                  name={`inputValue[${i}].${i}`}
                  control={control}
                  className={isFocus !== i ? "shadow-none border-none" : ""} 
                />
              </div>
              {(isFocus === i && selected === i) && <div className="mb-4 w-1/4">
                  <FormDropdown 
                    name={`dropdownValue[${i}].${i}`} 
                    control={control} 
                    options={options}
                    onChangeType={(event: any) => onChangeType(event, i)}
                  />
              </div>}
            </div>
            {(typeForms[i] === 1) && <div className="mb-4 w-2/4">
              <FormTextarea 
                name={`textValue[${i}].${i}`}  
                control={control}
                className={isFocus !== i ? "shadow-none border-none" : ""}  
              />
            </div>}
            {(typeForms[i] === 2) && <div className="mb-4 w-2/4">
              <FormRadio 
                name={`radioValue[${i}].${i}`}  
                control={control} 
              />
            </div>}
            {(typeForms[i] === 3) && <div className="mb-4 w-2/4">
              <FormMultiCheckbox 
                  name={`checkboxValue[${i}].${i}`}
                  control={control} 
                  setValue={setValue}
              />
            </div>}
            {(isFocus === i && selected === i) && 
              <div className="flex justify-end mt-6 w-full">
                <button onClick={e=>handleSave(e)} type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
                  Save
                </button>
              </div>}
          </div>
        ))}
        <div className="flex justify-end mt-6 w-2/4">
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
            Send All
          </button>
        </div>
      </form>
    </Layout>
  )
}

export default Home
