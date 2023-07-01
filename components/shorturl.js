import { useState } from 'react';
import { ClipboardIcon } from "@heroicons/react/24/outline";

export default function Shorturl({ url }) {
    const [data, setData] = useState("")

    if (url == "" || url == null) {
        return (
            <>
            </>
        )
    } else {
        const completeUrl = "http://localhost:3000/"+url;
        return (
            <>
                {/* <div className="flex-col md:max-md:flex md:max-lg:flex w-auto mx-auto space-x-96 mt-10 items-center">
                    <div typeof="text" className="text-3xl">ShortUrl</div>
                    <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold 
                    py-2 px-4 rounded mx-auto w-auto inline-flex items-center space-x-2">
                        <ClipboardIcon class="h-5 w- text-white" />
                        <div>Copy</div>
                    </button>
                </div> */}


                <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl mt-8">
                    <div className="md:flex md:space-x-40 items-center">
                        <div className="md:shrink-0">
                            <div id="completeUrl"typeof="text" className="text-lg">{completeUrl}</div>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold 
                            py-2 px-4 rounded mx-auto w-auto inline-flex items-center space-x-2 "
                            onClick={() => clipboard(completeUrl)}>
                            <ClipboardIcon className="h-5 w- text-white" />
                            <div>Copy</div>
                        </button>
                    </div>
                </div>
            </>
        )
    }

    function clipboard(completeUrl){
        navigator.clipboard.writeText(completeUrl);
        alert("Copied")
    }


}