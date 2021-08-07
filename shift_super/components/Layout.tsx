import Head from "next/head";
import Link from "next/link";

export default function Layout({children, title = "表参道 シフト管理"}) {
    return (
        <div className="flex">
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                {children}
            </main>

        </div>
    )
}