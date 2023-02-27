import { useState } from 'react'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { requiredMessage } from '../utils/constants'
import { Input, TextArea } from "../common/formComponents";
import DatePickerField from "@/components/datePickerField";
import CustomToggle from "@/components/customToggle";
import Calendar from "@/assets/svgs/calendar";
import { provinces } from '../utils/provinces'


const CompleteProfile = () => {
    const [hasAllergy, setHasAllergy] = useState<any>(false)
    const [state, setState] = useState<any>({

        name: "",
        birthdate: "",
        country: "",
        gender: "f",
        skin: "o",
        disease: "",
        disease_type: "o",
    })

    return (
        <div className="flex justify-center items-center py-6 bg-dark-main border-[1px] border-gray-8">
            <Formik
                initialValues={{
                    ...state
                }}
                validationSchema={Yup.object({
                    mobile: Yup.string().required(requiredMessage),
                })}
                onSubmit={(values: any) => {
                    // doSubmit(values)
                }}
            >
                {({ isValid, values, setFieldValue }: { isValid: any, values: any, setFieldValue: any }) => (
                    <Form className="text-white w-96">
                        <Input
                            name="name"
                            type="text"
                            placeholder="نام و نام خانوادگی:"
                            inputStyle={'w-full rounded-40px border-b-[1px] border-gray-8 py-2 mt-2 bg-dark-main text-white'}
                            containerStyle={"text-sm"}
                        />
                        <div className="flex justify-between items-center mt-6 border-b-[1px] border-gray-8">
                            <label className="text-gray-3 text-sm">
                                تاریخ تولد:
                            </label>
                            <br />
                            <div className="flex justify-center items-center">
                                <DatePickerField
                                    name="birthdate"
                                    inputPlaceholder="انتخاب"
                                    inputClassName='outline-none'
                                />
                                <Calendar color="#fff" />
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between items-center mt-6 text-sm">
                            <label className="text-gray-3 text-sm w-full mb-2">
                                جنسیت:
                            </label>
                            <br />
                            <label className="flex items-center">
                                <Field type="radio" name="gender" value={"f"} className="ml-2 w-5 h-5" />
                                خانم
                            </label>
                            <label className="flex items-end">
                                <Field type="radio" name="gender" value={"m"} className="ml-2 w-5 h-5" />
                                آقا
                            </label>
                            <label className="flex items-end">
                                <Field type="radio" name="gender" value={"o"} className="ml-2 w-5 h-5" />
                                موارد دیگر
                            </label>
                        </div>
                        <div className="flex justify-between items-center mt-6 border-b-[1px] border-gray-8 text-sm">
                            <label>استان:</label>
                            <Field as="select"
                                name="province"
                                id=""
                                className="bg-dark-main text-white outline-none"
                            // onClick={onProvinceClicked}
                            >
                                <option className="text-white" value={0}>انتخاب کنید</option>
                                {provinces.map((state: any, index) => (
                                    <option className="text-white" key={index} value={state.id}>
                                        {state.fields.name}
                                    </option>
                                ))}
                            </Field>
                        </div>
                        <div className="flex flex-wrap justify-between items-center mt-6 text-sm">
                            <label className="text-gray-3 text-sm w-full mb-2">
                                نوع پوست:
                            </label>
                            <br />
                            <label className="flex items-center">
                                <Field type="radio" name="skin" value={"o"} className="ml-2 w-5 h-5" />
                                معمولی
                            </label>
                            <label className="flex items-end">
                                <Field type="radio" name="skin" value={"a"} className="ml-2 w-5 h-5" />
                                خشک
                            </label>
                            <label className="flex items-end">
                                <Field type="radio" name="skin" value={"f"} className="ml-2 w-5 h-5" />
                                چرب
                            </label>
                            <label className="flex items-end">
                                <Field type="radio" name="skin" value={"m"} className="ml-2 w-5 h-5" />
                                مختلط
                            </label>
                        </div>
                        <div className="flex flex-wrap justify-between items-center mt-6 text-sm">
                            <div className="flex flex-wrap justify-beteen items-center">
                                <p className={`${hasAllergy ? "text-white" : ""} mr-1`}>حساسیت به محصول بخصوص:</p>
                            </div>
                            <CustomToggle
                                toggleSelected={hasAllergy}
                                setToggleSelected={setHasAllergy}
                                dotClassName={`${hasAllergy ? "bg-white" : " bg-white"}`}
                                className={`${hasAllergy ? "border-white bg-green-forth" : "border-white bg-dark-main"} `} />
                            {hasAllergy ?
                                <TextArea
                                    name="disease"
                                    placeholder='راجب حساسیت خود به طور مختصر توضیح بفرمایید'
                                    customStyle='border-[1px] border-white bg-dark-main w-full p-2 h-20 resize-none'
                                    containerStyle='w-full mt-2'
                                    defaultValue={""}
                                    row={2}
                                />
                                :
                                <span className='w-full'></span>
                            }
                        </div>
                        <div className="flex flex-wrap justify-between items-center mt-6 text-sm">
                            <label className="text-gray-3 text-sm w-full mb-2">
                                مشکل پوستی:
                            </label>
                            <br />
                            <label className="flex items-center">
                                <Field type="radio" name="disease_type" value={"a"} className="ml-2 w-5 h-5" />
                                آکنه
                            </label>
                            <label className="flex items-end">
                                <Field type="radio" name="disease_type" value={"r"} className="ml-2 w-5 h-5" />
                                جوش
                            </label>
                            <label className="flex items-end">
                                <Field type="radio" name="disease_type" value={"e"} className="ml-2 w-5 h-5" />
                                انعطاف کم پوست
                            </label>
                            <label className="flex items-end">
                                <Field type="radio" name="disease_type" value={"o"} className="ml-2 w-5 h-5" />
                                غیره
                            </label>
                        </div>

                        <button disabled={!isValid} type="submit" className="text-sm bg-blue-third text-white w-full rounded-40px px-3 py-2 mt-8 cursor-pointer">
                            ثبت
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CompleteProfile