import { ClipboardIcon } from "@heroicons/react/24/outline";

export default function Shorturl(){
    return(
        <>
        <div className="flex w-auto mx-auto space-x-96 mt-10 items-center">
            <div typeof="text" className="text-3xl">ShortUrl</div>
            <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold 
                py-2 px-4 rounded mx-auto w-auto inline-flex items-center space-x-2">
                <ClipboardIcon class="h-5 w- text-white" />
                <div>Copy</div>
            </button>
        </div>
        </>
    )
}