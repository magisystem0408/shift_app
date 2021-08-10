import Head from "next/head";
import Link from "next/link";
import Navigation from "./navigation";

export default function Layout(props) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="container mx-auto">
                {props.children}
            </main>
        </div>
    )
}