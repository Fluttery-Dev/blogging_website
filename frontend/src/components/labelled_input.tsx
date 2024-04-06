import { ChangeEventHandler } from "react"

interface LabelledInputParams{
    label: string;
    placeholder: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    type?: string;
}
export const LabelledInput = ({label, placeholder, type, onChange}:LabelledInputParams)=>{
    return (
        <div>
            <label htmlFor="first_name" className=" block mb-2 text-sm font-bold text-gray-900 ">{label}</label>
            <input type={type||"text"} id="first_name" onChange={onChange} className="bg-gray-50 border border-gray-300 font-semibold text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    )
}