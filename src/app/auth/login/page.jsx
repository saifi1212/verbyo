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
    ]
    const inputValues = {
        user_email: "",
        user_password: ""
    }
    return (
        <CommonForm linkHref={"/auth/sign-up"} btnText={"Log In"} linkText={"Create your account"} inputValues={inputValues} title={"Login"} inputsArr={inputsArr} checkText={<p className='text-[12px] leading-[14px] font-medium text-[#4B4B4B]'>Keep me logged in</p>} />
    )
}

export default Page