import React from 'react'
import { useFormikContext } from "formik";
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import UseGetDataObject from '../hooks/useGetDataObject'
import { currentDate } from '../utils/currentDate'

type DatePickerField = {
    name: string;
    inputPlaceholder: string;
    label?: string;
    span?: string;
    hasmin?: any;
    hasmax?: any;
    disabled?: boolean;
    inputClassName?: string;
    wrapperClassName?: string;
    firstDate?: any;
    onChange?:any
}

const DatePickerField: React.FC<DatePickerField> = ({ name, onChange, label, span, inputPlaceholder, hasmin, hasmax, inputClassName, wrapperClassName, firstDate }) => {
    const formik = useFormikContext();
    const field = formik?.getFieldProps(name);

    return (
        <>
            {label &&
                <label>{label}</label>
            }
            {span &&
                <span style={{ color: '#aaa', fontSize: 10 }}>{span}</span>
            }
            <DatePicker
                value={field?.value?.day ? field?.value : null}
                onChange={onChange ? onChange : (value) => formik?.setFieldValue(name, value)}
                shouldHighlightWeekends
                inputClassName={`${inputClassName} h-9 w-20 cursor-pointer`}
                wrapperClassName={`${wrapperClassName}`}
                colorPrimary="#0fbcf9"
                locale="fa"
                maximumDate={hasmax && hasmax}
                minimumDate={(hasmin && firstDate) ? firstDate : hasmin ? UseGetDataObject(currentDate) : undefined}
                inputPlaceholder={inputPlaceholder}
            />
        </>
    );
}
export default DatePickerField