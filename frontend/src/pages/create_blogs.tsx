import { ChangeEventHandler, useState } from "react";
import { Appbar } from "../components/appbar"
import { LabelledInput } from "../components/labelled_input"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../config";

export const CreateBlog = ()=>{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center h-screen">
            <Appbar ></Appbar>
            <div className="w-2/3 h-1/2 flex flex-col justify-between">
                <LabelledInput label="Title" placeholder="Enter the Title" onChange={(e)=>{setTitle(e.target.value)}}></LabelledInput>
                <Content onChange={(e)=>{setDescription(e.target.value)}} ></Content>
                <button onClick={async () => {
                    const response = await axios.post(`${SERVER_URL}/api/v1/blog/create`, {
                        title,
                        content: description
                    }, {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("token")
                        }
                    });
                    navigate(`/blog/${response.data.blogId}`)
                }} type="button"  className="self-end w-fit text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Publish</button>
            </div>
        </div>
    )
}

const Content = ({onChange} :{onChange: ChangeEventHandler<HTMLTextAreaElement>})=>{
    return (
        <div>
            
            <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-900 ">Your message</label>
            <textarea onChange={onChange} id="message" rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                
        </div>
    )
}