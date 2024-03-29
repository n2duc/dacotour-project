import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faUser,faRedo } from '@fortawesome/free-solid-svg-icons'
const Support = () => {
  return (
    <section className="support_home relative bg-white">
        <div className="max-container w-full py-24">
            <h2 className="text-5xl text-black font-bold text-center mb-14">WHY CHOOSE US?</h2>
            <div className="flex justify-between items-center bg-white rounded-xl mb-24">
                <SupportItem text="Thân thiện">
                    <FontAwesomeIcon icon={faDollarSign}  className="text-green-500 h-10 w-10" />
                </SupportItem>
                <SupportItem text="Nhiệt huyết">
                    <FontAwesomeIcon icon={faUser}  className="text-green-500 h-10 w-10" />
                </SupportItem>
                <SupportItem text="Chân Thật">
                    <FontAwesomeIcon icon={faRedo}  className="text-green-500 h-10 w-10" />
                </SupportItem>
                <SupportItem text="Hỗ trợ 24/7">
                    <FontAwesomeIcon icon={faRedo}  className="text-green-500 h-10 w-10 " />
                </SupportItem>
            </div>
        </div>
    </section>
  )
}
const SupportItem = ({ text, children }) => {
    return (
        <div className="flex flex-col items-center gap-8 mt-20">
            <div className=" rounded-2xl flex items-center justify-center">
                {children}
            </div>
            <span className='text-center font-semibold text-xl text-black w-32'>{text}</span>
        </div>
    )
}
export default Support