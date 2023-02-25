import React, { useEffect } from "react";
import { useField } from "formik";

type InputType = {
  label?: string, inputStyle?: string, containerStyle?: string, defaultValue?: string, span?: string, id?: string, name?: string, type?: string, placeholder?: string, readonly?: boolean, accept?: string, disabled?: any
}

const Input: React.FC<InputType> = ({ label, readonly, inputStyle, type, disabled, containerStyle, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta, helpers] = useField(props);
  const { defaultValue, span } = props;
  const { setValue } = helpers;
  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
    // eslint-disable-next-line
  }, [defaultValue]);

  return (
    <div className={containerStyle}>
      {label &&
        <label htmlFor={props.id || props.name}>
          {label ? label + " :" : ""}
        </label>
      }
      {span &&
        <span style={{ color: '#aaa', fontSize: 10 }}> {span} </span>
      }
      <input className={`form-control outline-none ${inputStyle}`} {...field} {...props} disabled={disabled} type={type} readOnly={readonly} accept={props.accept} />
      {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

type TextArea = {
  label?: string, customStyle?: string, containerStyle?: string, id?: string, name?: string, row?: number, placeholder?: string, defaultValue?: string, disabled?: any
}

const TextArea: React.FC<TextArea> = ({ label, disabled, row, placeholder, customStyle, defaultValue, containerStyle, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <div className={containerStyle}>
      <label htmlFor={props.id || props.name}>
        {label ? label + " :" : ""}
      </label>
      <textarea disabled={disabled} placeholder={placeholder} className={`${customStyle}`} defaultValue={defaultValue} {...field} {...props} row={row} />
      {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

type CheckBox = {
  children: string, multiple: string, name: string
}

const CheckBox: React.FC<CheckBox> = ({ children, multiple, ...props }) => {
  // We need to tell useField what type of input this is
  // since React treats radios and checkboxes differently
  // than inputs/select/textarea.
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="form-check-label">
        <input type="checkbox" className="m-1 p-1" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error && !multiple ? (
        <div className="text text-danger">{meta.error}</div>
      ) : null}
    </>
  );
};

type RadioButton = {
  children: any, multiple: string, name: string, labelStyles: string, containerStyles: string, label: string, value: any, checked: any
}

const RadioButton: React.FC<RadioButton> = ({ children, labelStyles, checked, containerStyles, value, label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "radio" });

  return (
    <div className={containerStyles}>
      <label className={`form-check-label ${labelStyles}`}>{label}</label>
      <input
        className={`radio-button-input `}
        type="radio"
        value={value}
        // checked={field.id === field.value}
        onChange={field.onChange}
        checked={checked}
      />
      {children}
      {meta.touched && meta.error ? (
        <div className="text text-danger">{meta.error}</div>
      ) : null}
    </div>
  );
};

type Select = {
  children: string, multiple: string, name: string, secondservice: any, defaultValue: string, span: string, id: string, label: string
}

const Select: React.FC<Select> = ({ children, secondservice, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { defaultValue, span } = props;
  const { setValue } = helpers;
  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
    // eslint-disable-next-line
  }, [defaultValue]);

  return (
    <>
      <label htmlFor={props.id || props.name}>{props.label} :</label>
      <span style={{ color: '#aaa', fontSize: 10 }}> {span} </span>
      <select
        className="form-control mb-2"
        {...field}
        {...props}
        onClick={() =>
          secondservice ? secondservice(meta.value, props.name) : ""
        }
      >
        {children}
      </select>
      {meta.touched && meta.error ? (
        <div className="text text-danger">{meta.error}</div>
      ) : null}
    </>
  );
};

export { Input, CheckBox, RadioButton, Select, TextArea };
