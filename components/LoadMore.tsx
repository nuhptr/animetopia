"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

import { fetchAnime } from "@/app/action"
import AnimeCard from "./AnimeCard"

let page = 2

export type AnimeCard = JSX.Element

export default function LoadMore() {
   const { ref, inView } = useInView()
   const [data, setData] = useState<AnimeCard[]>([])

   useEffect(() => {
      if (inView) {
         console.log("Load more")
         //? Infinite load
         fetchAnime(page).then((response) => {
            setData([...data, ...response])
            page++
         })
      }
   }, [data, inView])

   return (
      <>
         <section className="grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">{data}</section>
         <section className="flex items-center justify-center w-full">
            <div ref={ref}>
               <Image src="/ic_spinner.svg" alt="spinner" width={56} height={56} className="object-contain" />
            </div>
         </section>
      </>
   )
}
