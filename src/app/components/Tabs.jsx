"use client"
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from "next/navigation"

const Tabs = () => {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')

    console.log(genre, 'genre')

    const tabs = [
        {
            name: "En populer",
            url: "popular"
        },
        {
            name: "En Son",
            url: "latest"
        },
        {
            name: "Yakında Gelecekler ",
            url: "upcoming"
        },
    ]
  return (
    <div className='p-5 my-3 bg-gray-100 dark:bg-gray-800 flex items-center justify-center gap-7'>
       { 
            tabs.map((tab,i) => (
                <Link className='cursor-pointer hover:opacity-75 transition-opacity' href={`/?genre=${tab.url}`}>{tab.name}</Link>
            ))
        }
    </div>
  )
}

export default Tabs