import React from 'react'
import SavePage from '../component/saved/SavePage'
import Head from "next/head";

export default function Favourite() {
    return (
        <div>
               <Head>
    <title>Plants Store / Favourite</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
            <SavePage/>
        </div>
    )
}
