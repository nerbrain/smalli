import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className="min-h-full">
        {/* <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Home</h1>
          </div>
        </header> */}
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Your content */}
            <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
              <label for="URL" className='text-4xl mx-auto h-10 w-auto '>Smalli</label>
              <div className="mb-3 pt-5">
                <input type="text" placeholder="Add Long URL" className="px-3 py-4 placeholder-slate-500 text-slate-900 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full" />
              </div>

              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold 
              py-2 px-4 rounded mx-auto w-auto mt-5">
                Smalli It
              </button>
            </div>

          </div>
        </main>
      </div>
    </>
  )
}
