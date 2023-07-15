import { getCookie } from 'cookies-next'
import useSWR from 'swr'
import base_url from '../url'
import Router from 'next/router';
import { redirect } from 'next/dist/server/api-utils';
import { AuthContext } from '../stores/AuthContext';
import { useContext } from 'react';

export default function UrlList2() {
    const { loggedIn, login, logout } = useContext(AuthContext);
    const token = getCookie("jwt");
    // console.log("cookie urllist: " + token)

    const fetcher = (...args) => fetch(...args, { headers: { 'authorization': `Bearer ${token}` } }).then(res => res.json())
    const { data, error, isLoading } = useSWR(base_url + 'urls/list', fetcher)
    if (error){
        console.log(error)
        logout();
        Router.push('/signIn')
    }
    if (isLoading) return <div>loading...</div>
    console.log(data);

    if(data){
        console.log(data)
    }

    return (
        <div>
            <div>
                <h1 className='text-4xl'>My URLs</h1>
                {data.map(url => (
                    <div className=' bg-slate-200 rounded-md pl-3' key={url.id}>
                        <div className='text-3xl mt-2'>
                            {url.shortURL}
                        </div>
                        <div className='text-l text-gray-800'>
                            Long url: {url.longURL}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}