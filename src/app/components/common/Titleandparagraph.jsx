import { popins } from "../../layout"

const Titleandparagraph = ({title,para,extraClasses,extraClassestitle,extraClassespara}) => {
  
  return (
<div className={`${extraClasses}  w-full mx-auto  flex flex-col  items-center`}>

{/*Title- Organic Word-of-Mouth social media advertising campaigns */}
<div className={`${extraClassestitle}  w-full text-[38px] font-[700] leading-[49.5px] text-[#1C1934] justify-center items-center text-center flex flex-col capitalize `}>
{title}{" "}
</div>
{/* para */}
<div className={`${popins.className} ${extraClassespara}    w-full  font-[400] text-[18px] leading-[30px] text-[#5E5D6D] text-center mt-[21px]`}>
{para}
</div>
</div>  )
}

export default Titleandparagraph