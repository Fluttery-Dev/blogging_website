import { Appbar } from "../components/appbar"
import { LabelledInput } from "../components/labelled_input"

export const CreateBlog = ()=>{
    return (
        <div className="flex flex-col items-center h-screen">
            <Appbar></Appbar>
            <div className="w-2/3 h-1/2 flex flex-col justify-between">
                <LabelledInput label="Title" placeholder="Enter the Title" onChange={()=>{}}></LabelledInput>
                <Content></Content>
                <button type="button"  className="self-end w-fit text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Create</button>
            </div>
        </div>
    )
}

const Content = ()=>{
    return (
        <div>
            
            <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-900 ">Your message</label>
            <textarea id="message" rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                
        </div>
    )
}