import CommonForm from '@/app/components/auth/CommonForm'
import React from 'react'

const Page = () => {
    const inputsArr = [
        {
            type: "email",
            placeholder: "Enter your email",
            name: "user_email"
        },
        {
            type: "password",
            placeholder: "Enter your password",
            name: "user_password"
        },
        {
            type: "password",
            placeholder: "Retype Password",
            name: "retyped_password"
        },
    ]
    const inputValues = {
        user_email: "",
        user_password: "",
        retyped_password: ""
    }
    return (
        <CommonForm inputValues={inputValues} btnText={"Sign Up"} linkText={"Login"} linkHref={"/auth/login"} inputsArr={inputsArr} title={"Create your account"} checkText={<p className='text-[12px] leading-[14.63px] font-medium '>I agree <span className='font-semibold'>Terms and Conditions</span></p>} />
    )
}

export default Page