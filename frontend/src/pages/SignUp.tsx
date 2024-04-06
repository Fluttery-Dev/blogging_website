import { Link } from "react-router-dom";
import { Quote } from "../components/quote";
import { LabelledInput } from "../components/labelled_input";
import { BigButton } from "../components/big_button";
import { useState } from "react";
import { singUpSchema } from "@viper_08/medium-common";
import axios, { AxiosError } from "axios";
import { SERVER_URL } from "../config";

export const SignUp = ()=>{
    
    return <div className="grid lg:grid-cols-2 ">
        <CreateAccountForm/>     
        <div className="sm: hidden lg:block">
            <Quote/>
        </div>
    </div>
}

const CreateAccountForm = ()=>{
    const [userInputs, setUserInputs] = useState<singUpSchema>({
        name: "",
        password: "",
        userName: "",
    })

    return (
        <div className=" h-screen w-full bg-white flex justify-center items-center">
            <div className=" h-2/3 p-3 flex flex-col">
                <div className="text-center py-2"> 
                    <div className="title text-4xl font-bold py-3">Create an Account</div>
                    <div className="text-slate-500 text-lg font-semibold">Already have an account? <Link to={"/signin"} className="underline">Login</Link></div>
                </div>
                <div className="flex flex-col justify-between h-full my-3">
                    <LabelledInput label="Username" placeholder="Enter Your name" onChange={(e)=>{
                        setUserInputs({
                            
                            ...userInputs,
                            name: e.target.value
                        })
                    }}></LabelledInput>

                    <LabelledInput label="Email" placeholder="temp@temp.com" onChange={(e)=>{
                        setUserInputs({
                            ...userInputs,
                            userName: e.target.value,
                        })
                    }} ></LabelledInput>

                    <LabelledInput label="Password" placeholder="*********" type="password" onChange={(e)=>{
                        setUserInputs({
                            ...userInputs,
                            password: e.target.value,
                        })
                    }}></LabelledInput>

                    <BigButton text="Sign Up" onChange={async ()=>{
                        
                        const res = await axios.post(`${SERVER_URL}/api/v1/user/signUp`, userInputs, {validateStatus:_ =>true});
                        alert(res.data.message);
                        
                    }}></BigButton>  
                </div>
            </div>
        </div>
    )
}
