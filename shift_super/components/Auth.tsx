import {useState} from "react";
import {useRouter} from "next/router";
import Cookie from "universal-cookie";

const cookie = new Cookie()

export default function Auth() {

    const router = useRouter()
    const [supername, setSupername] = useState("")
    const [password, setPassword] = useState("")
    const [isLogin, setIsLogin] = useState(true)

    let [err_msg,setLoginError] =useState("")

    const login = async () => {
        try {
            await fetch(
                `http://127.0.1:8000/super/auth/jwt/create/`,
                {
                    method: "POST",
                    body: JSON.stringify({username: supername, password: password}),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            ).then((res) => {
                if (res.ok) {
                    return res.json()
                }
            }).then((data) => {
                // アクセストークンセットする
                const options = {path: "/"}
                cookie.set("access_token", data.access, options)
            });
            router.push("/main-page")
        } catch (err) {
            setLoginError(err_msg="もう一度入力してください")
            console.log(err)
        }
    }
    const authSuperUser = async (e) => {
        e.preventDefault()
        if (isLogin) {
            //継承
            login()
        } else {
            try {
                await fetch(`http://127.0.0.1:8000/super/register/`,
                    {
                        method: "POST",
                        body: JSON.stringify({username:supername, password: password}),
                        headers:{
                            "Content-Type":"application/json",
                        }
                    }).then((res) =>{
                        if(res.status==400){
                            throw "authentication failed"
                        }
                        login()
                })
            } catch (err) {
                setLoginError(err_msg="既にユーザーが存在します")
                console.log(err)
            }
        }
    }

    return (<div className="h-screen font-sans bg-red-400 bg-cover">
            <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                <div className="w-full max-w-lg">
                    <div className="leading-loose">
                        <form onSubmit={authSuperUser}
                              className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
                            <p className="text-white font-medium text-center text-lg font-bold">
                                {isLogin ? "ログインする" : "新規アカウント作成"}
                            </p>

                            <p　className="flex text-sm text-yellow-300 justify-center">
                                {err_msg}
                            </p>

                            <div className="">
                                <label className="block text-sm text-white" htmlFor="email">ユーザーネーム</label>
                                <input
                                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                                    type="text" id="username" placeholder="ユーザーネームを入力してください" value={supername}

                                    onChange={(e)=>{
                                        setSupername(e.target.value)
                                    }}

                                    required/>
                            </div>
                            <div className="mt-2">
                                <label className="block  text-sm text-white">パスワード</label>
                                <input
                                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                                    type="password" id="password" placeholder="パスワードを入力してください" value={password}
                                    onChange={(e)=>{
                                        setPassword(e.target.value)
                                    }}

                                    required/>
                            </div>

                            <div className="text-center mt-2">
                            <span onClick={() => setIsLogin(!isLogin)}
                                  className="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-white">
                                {isLogin ? "アカウントを作成する" : "ログインする"}
                            </span>
                            </div>
                            <div className="mt-2 items-center flex justify-center">
                                <button
                                    className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                                    type="submit">
                                    {isLogin ? "ログイン" : "新規登録"}
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    )


}