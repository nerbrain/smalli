import { getCookie } from "cookies-next"
import UrlList from "../components/urllist"
import UrlList2 from "../components/urlList2";

export default function Dashboard() {

  // const token = getCookie("jwt");
  // console.log(token)
  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* <UrlList></UrlList> */}
            <UrlList2></UrlList2>
            
            </div>
        </main>
      </div>
    </>
  )
}

