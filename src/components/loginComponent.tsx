import React from 'react'
import LogoIcon from '../assets/svgs/logo'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { requiredMessage } from '../utils/constants'
import { Input } from "../common/formComponents";
import auth from '../services/authService'

type LoginComponent = {
    sendNumber: any
    setShowPassword: any
    setExist: any
}

const LoginComponent: React.FC<LoginComponent> = ({ sendNumber, setShowPassword, setExist }) => {
    const doSubmit = async (values: any) => {
        const obj = {
            mobile: 0 + values.mobile.toString(),
        }
        auth.login(obj).then((data) => {
            sendNumber(obj.mobile);
            setShowPassword(data.has_password)
            setExist(data.exist)
        })
    };
    return (
        <div className="flex flex-wrap justify-center w-full">
            <p className="w-4/5 text-center text-white">
                برای ورود یا ثبت نام، لطفا شماره تماس خود را وارد نمایید
            </p>
            <div className="w-4/5 mt-4 xs:mt-12">
                <Formik
                    initialValues={{
                        mobile: "",
                    }}
                    validationSchema={Yup.object({
                        mobile: Yup.string()
                            .matches(
                                /^(\+98|0)?9\d{9}$/g, "لطفا فقط عدد وارد کنید"
                            )
                            .required(requiredMessage),
                    })}
                    onSubmit={(values: any) => {
                        doSubmit(values)
                    }}
                >
                    {({ isValid }: { isValid: any }) => (
                        <Form className="text-white">
                            <Input
                                label="تلفن همراه"
                                name="mobile"
                                type="number"
                                placeholder=".........09"
                                inputStyle={'w-full rounded-40px border-2 border-gray-4 px-3 py-2 mt-2 bg-dark-main text-white'}
                                containerStyle={"text-sm"}
                            />
                            <button disabled={!isValid} type="submit" className="text-sm border-[1px] border-gray-8 text-white w-full rounded-40px px-3 py-2 mt-2 cursor-pointer">
                                ورود
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default LoginComponent