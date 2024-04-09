import { signInSchema } from "@viper_08/medium-common";
import { LabelledInput } from "../components/labelled_input";
import { BigButton } from "../components/big_button";
import axios from "axios";
import { SERVER_URL } from "../config";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Quote } from "../components/quote";

export const SignIn = ()=>{
    return (
        <div className="grid lg:grid-cols-2 ">
        <LoginAccountForm></LoginAccountForm>   
        <div className="sm: hidden lg:block">
            <Quote/>
        </div>
    </div>
    )
}



const LoginAccountForm = ()=>{
    const navigate = useNavigate();
    if(localStorage.getItem('token')) navigate("/blogs")
    const [userInputs, setUserInputs] = useState<signInSchema>({

        password: "",
        userName: "",
    })

    return (
        <div className=" h-screen w-full bg-white flex justify-center items-center">
            <div className=" h-2/5 p-3 flex flex-col">
                <div className="text-center py-2"> 
                    <div className="title text-4xl font-bold py-3">Login to your Account</div>
                    <div className="text-slate-500 text-lg font-semibold">Already have an account? <Link to={"/signup"} className="underline">SignUp</Link></div>
                </div>
                <div className="flex flex-col justify-between h-full my-3">
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

                    <BigButton text="Sign In" onChange={async ()=>{
                        
                        const res = await axios.post(`${SERVER_URL}/api/v1/user/signIn`, userInputs, {validateStatus:_ =>true});
                        if(res.status >= 200 && res.status<300 ){
                            localStorage.setItem('token', res.data.token);
                            navigate("/");
                        }
                        else{
                            alert(res.data.message);
                        }
                    }}></BigButton>  
                </div>
            </div>
        </div>
    )
}
