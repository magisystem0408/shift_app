import Layout from "../components/layout/layout";
import Auth from "../components/Auth";

export default function Home() {
  return (
    <div className="">
      {/*  ログイン認証に成功すると、main-pageに飛ぶ*/}
      <Auth />
    </div>
  )
}
