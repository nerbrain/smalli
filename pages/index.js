import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import Shorturl from '../components/shorturl';
import base_url from '../url';

const validUrl = require('valid-url');

export default function Home() {
  const [url, setLongUrl] = useState('');
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    setLongUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Input value:', JSON.stringify({ url }));
    // Perform any desired actions with the input value
    // Reset the input field if needed
    // setInputText(inputText);
    getShortURL(url)

  };

  async function getShortURL(url){
    if (validUrl.isWebUri(url)){
      console.log('Looks like an URI');
      try {
        const response = await fetch(base_url+'urls/generateUrl', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url }),
        });
    
        if (response.ok) {
          console.log('POST request successful');
          const result = await response.json();
          console.log(result)
          setResult(result.shortURL)
        } else {
          console.log('POST request failed');
          // Handle the error if needed
        }
      } catch (error) {
        console.log('An error occurred:', error);
        // Handle the error if needed
      }
  } else {
      console.log('Not a URI');
  }
  }

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
              <label htmlFor="URL" className='text-4xl mx-auto h-10 w-auto '>Smalli</label>
              <div className="mb-3 pt-5">
                <input type="text" placeholder="Add Long URL" onChange={handleInputChange} 
                className="px-3 py-4 placeholder-slate-500 text-slate-900 relative bg-white rounded text-base border-2 shadow outline-none focus:outline-none focus:ring w-full" />
              </div>

              <button className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold 
                py-2 px-4 rounded mx-auto w-auto mt-5 " onClick={handleSubmit}>
                Smalli It
              </button>
              <Shorturl url={result}/>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}


