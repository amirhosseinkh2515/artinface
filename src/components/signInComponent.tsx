import React, { useEffect } from 'react'
import CustomLink from '../components/customLink'
import LogoIcon from '../assets/svgs/logo'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { requiredMessage } from '../utils/constants'
import { Input } from "../common/formComponents";
import { useRouter } from 'next/router'
import auth from '../services/authService'

type SignInComponent = {
    showPassword?: boolean
    exist?: boolean
    phoneNumber: any
    setShowPassword: any
    sendGa?: any
}

const SignInComponent: React.FC<SignInComponent> = ({ showPassword, exist, phoneNumber, setShowPassword }) => {
    const router = useRouter()
    const [counter, setCounter] = React.useState(180);
    const doSubmit = async (values: any) => {
        const obj = showPassword ? {
            password: values.otp,
            mobile: phoneNumber
        } :
            {
                otp: values.otp,
                mobile: phoneNumber
            }
        await auth.otp(obj);
        // exist ? sendGa("Registration/Login", "click", "successful login") : sendGa("Registration/Login", "click", "successful registration")
        if (router.asPath !== "/login") {
            window.location.replace(router.asPath)
        }
        else if (typeof window !== 'undefined') {
            window.location.href = "/";
        }
    }

    const wantToSendOtp = () => {
        setShowPassword(false)
        const obj = {
            mobile: phoneNumber,
            send_otp: 1
        }
        auth.login(obj)
        setCounter(180)
    }

    const padTime = (time: any) => {
        return String(time).length === 1 ? `0${time}` : `${time}`;
    };

    const format = (time: any) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${padTime(seconds)}`;
    };

    useEffect(() => {
        let timer: any;
        if (counter > 0) {
            timer = setTimeout(() => setCounter((c: any) => c - 1), 1000);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [counter]);
    return (
        <div className="flex flex-wrap justify-center w-full">
            <p className="w-full text-center  text-white">
                لطفا {`${showPassword ? "رمز عبور " : " کد دریافتی"}`} خود را وارد نمایید
            </p>
            <div className="w-4/5 mt-4 xs:mt-12">
                <Formik
                    initialValues={{
                        otp: "",
                    }}
                    validationSchema={Yup.object({
                        otp: Yup.string().required(requiredMessage)
                    })}
                    onSubmit={(values: any) => {
                        doSubmit(values);
                    }}
                >
                    {({ isValid }: { isValid: any }) => (
                        <Form >
                            <div className="">
                                <Input
                                    label=""
                                    inputStyle={'w-full rounded-40px border-[1px] border-gray-4 px-3 py-2 mt-2 bg-dark-main text-white'}
                                    containerStyle={"text-sm"}
                                    placeholder={`${showPassword ? "رمز عبور " : " کد دریافتی"}`}
                                    name="otp"
                                    type={`${showPassword ? "password" : "text"}`}
                                />

                                {!exist &&
                                    <div className="text-sm my-2 text-white">
                                        <span>
                                            با ثبت نام
                                            <CustomLink className='text-blue-third' href="/privacy-and-terms" >
                                                {' قوانین و مقررات  '}
                                            </CustomLink>
                                            بانک زمان را می پذیرم.
                                        </span>
                                    </div>
                                }

                                {!showPassword &&
                                    <button
                                        disabled={counter !== 0}
                                        type="button"
                                        className={`${counter !== 0 ? "bg-dark-main text-gray-2 border-[1px] border-gray-8" : "bg-red-main text-white"} w-full text-sm rounded-40px px-3 py-2 mt-2 cursor-pointer`}
                                        onClick={() => wantToSendOtp()}
                                    >
                                        <span className="">{format(counter)}</span>
                                        <span className=""> ارسال مجدد</span>
                                    </button>
                                }
                            </div>
                            <button disabled={!isValid} type="submit" className="text-sm bg-blue-third text-white w-full rounded-40px px-3 py-2 mt-2 cursor-pointer">
                                {exist ? "ورود" : "تایید"}
                            </button>
                        </Form>
                    )}
                </Formik>
                {showPassword &&
                    <div >
                        <button
                            type="button"
                            onClick={() => wantToSendOtp()}
                            className={`text-sm bg-gray-2 text-white w-[50%] rounded-40px px-3 py-2 mt-2 cursor-pointer`}
                        >
                            ورود با  کد یک بار مصرف
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}
export default SignInComponent