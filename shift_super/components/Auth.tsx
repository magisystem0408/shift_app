import {useState} from "react";
import {useRouter} from "next/router";
import Cookie from "universal-cookie";

const cookie =new Cookie()

export default function Auth(){

    const router =useRouter()
    const [supername,setSupername] =useState("")
    const [password,setPassword] =useState("")
    const [isLogin,setIsLogin] =useState(true)




}