import { getCookie } from "cookies-next";
import base_url from "../url";
import { useState, useEffect } from 'react'
import { get } from "http";

// export async function getServerSideProps(context) {
//     const cookies = context.req.headers.cookie;
//   return {
//     props: {token: cookies},
//   };
// }

async function UrlList() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    const token = getCookie("jwt");
    console.log("cookie urllist: "+token)

    const urlListData = await fetch('http://localhost:3005/user/signIn', {
        method: 'GET',
        headers: {
          'Authentication': `Bearer ${token}`
        },
      });
      console.log(urlListData)
    return (
        <div>
            {/* <h1>{data.shortURL}</h1>
            <p>{data.longURL}</p> */}
        </div>
    )
}

export default UrlList;