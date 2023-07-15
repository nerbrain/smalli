import { useRouter } from 'next/router'
import base_url from '../url'
import { redirect } from 'next/dist/server/api-utils';
import { useEffect } from 'react';




export default function Page({ urlInfo }) {
    const router = useRouter();
    useEffect(() => {
        
        console.log(urlInfo.longURL)
        router.push(urlInfo.longURL)
    }, [])

    return <div>Loading...</div>
}

Page.getInitialProps = async ({ query }) => {
    // console.log(query.id)
    const res = await fetch(base_url + "urls/" + query.id)
    const json = await res.json()
    return { urlInfo: json }
}