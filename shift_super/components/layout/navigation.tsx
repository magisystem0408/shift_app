import Link from 'next/link';
import {useRouter} from "next/router";
import Cookie from "universal-cookie";
const cookie =new Cookie()

export default function Navigation() {
    const router =useRouter()
    const logout =() =>{
        cookie.remove("access_token")
        router.push("/")
    }
    return (
        <div className="w-full h-screen">
            <header className="bg-red-400">
                <nav className="flex justify-between w-full text-white p-4">
                    <Link href="/"><span className="font-semibold text-xl tracking-tight">シフト管理</span></Link>
                    <div className="md:items-center md:w-auto flex">
                        <div className="md:flex hidden">
                            <a className="block md:text-white mr-4" href="/link">シフト登録</a>
                            <a className="block md:text-white mr-4" href="/link">シフト一覧</a>
                        </div>
                        <div className="flex text-sm p-2 ml-2 bg-teal-500 text-gray-100 font-semibold leading-none border border-teal-600 rounded hover:border-transparent hover:bg-teal-600" >
                            <button　onClick={logout}>ログアウト</button>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )

}