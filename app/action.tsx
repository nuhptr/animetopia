"use server"

import AnimeCard, { AnimeProps } from "@/components/AnimeCard"

export const fetchAnime = async (page: number) => {
   const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`)
   const data = await response.json()

   // console.log(data)
   return data.map((item: AnimeProps, index: number) => <AnimeCard key={item.id} anime={item} index={index} />)
}
