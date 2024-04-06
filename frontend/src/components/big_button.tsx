import { MouseEventHandler } from "react"

export const BigButton = ({text, onChange}:{text:string, onChange:MouseEventHandler<HTMLButtonElement>})=>{
    return (
        <button type="button" onClick={onChange} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{text}</button>
    )
}