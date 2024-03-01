"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '../common/Button'
import { popins } from '@/app/layout'
import Link from 'next/link'

const CommonForm = ({ title, inputsArr = [], checkText, linkHref, inputValues, btnText, linkText }) => {
    const [checked, setchecked] = useState(false);
    const [inputData, setinputData] = useState(inputValues);
    const handleChange = (e) => {
        setinputData((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })

    }
    console.log(inputData)
    return (
        <div className='bg-[#EFF0FC] px-[85px] pt-[54px] pb-[38px] absolute h-fit inset-0 m-auto rounded-[16px] max-w-[600px] w-full '>
            <p className='text-[#1C1934] text-[28px] leading-[38.13px] text-center font-bold '>{title}</p>
            <form >
                <div className='flex flex-col gap-[20px] mt-[33px]'>

                    {inputsArr.map((item, index) => (
                        <div key={index + "inputs"} className='relative '>
                            <input onChange={handleChange} value={inputData[item.name]} type={item.type} name={item.name} placeholder={item.placeholder} className='w-full max-h-[50px] outline-none  border border-[#D8DBFB] bg-white py-[16.5px] pl-[18px] rounded-[6px] text-[14px] leading-[17.7px] font-medium' />
                            {item.type == "password" && <Image className='absolute right-[17px] top-[18px]' width={15} height={14} src={"/auth/password-hide.svg"} />}
                        </div>
                    ))}
                </div>
                <div className='flex gap-[11px] items-center mt-[24px]'>
                    <div onClick={() => { setchecked(!checked) }} className='cursor-pointer w-[15px] h-[15px] bg-[url(/auth/check-bg.svg)] bg-cover bg-no-repeat bg-center flex items-center justify-center'>
                        {checked && <Image width={6} height={4} src={"/auth/check.svg"} />}
                    </div>
                    {checkText}
                </div>
                <Button text={btnText} style={"mt-[33px]"} />
            </form>
            <button className={`w-full rounded-[12px] font-semibold text-[16px] justify-center gap-[6px] bg-white items-center  flex min-h-[44px] mt-[15px] ${popins.className}`}>
                <Image width={14} height={14} src={"/auth/google.svg"} />
                Continue with Google
            </button>
            <Link className='w-full text-center mt-[29px] block text-[#057DF3]' href={`${linkHref}`}>
                {linkText}
            </Link>
        </div>
    )
}

export default CommonForm