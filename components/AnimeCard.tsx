"use client"

import Image from "next/image"
import { MotionDiv } from "./MotionDiv"
import { Variants } from "framer-motion"

export interface AnimeProps {
   id: string
   name: string
   image: {
      original: string
   }
   kind: string
   episodes: number
   episodes_aired: number
   score: string
}

interface Props {
   anime: AnimeProps
   index: number
}

const variants: Variants = {
   hidden: { opacity: 0 },
   visible: { opacity: 1 },
}

export default function AnimeCard({ anime, index }: Props) {
   return (
      <MotionDiv
         variants={variants}
         initial="hidden"
         animate="visible"
         transition={{ delay: index * 0.25, ease: "easeInOut", duration: 0.5 }}
         className="relative w-full max-w-sm rounded">
         <div className="relative w-full h-[37vh]">
            <Image src={`https://shikimori.one${anime.image.original}`} alt={anime.name} fill className="rounded-xl" />
         </div>
         <div className="flex flex-col py-4 gap-3">
            <div className="flex items-center justify-between gap-1">
               <h2 className="w-full text-xl font-bold text-white line-clamp-1">{anime.name}</h2>
               <div className="py-1 px-2 bg-[#161921] rounded-sm">
                  <p className="text-sm font-bold text-white capitalize">{anime.kind}</p>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="flex flex-row items-center gap-2">
                  <Image src="/ic_episodes.svg" alt="episodes" width={20} height={20} className="object-contain" />
                  <p className="text-base font-bold text-white">{anime.episodes || anime.episodes_aired}</p>
               </div>
               <div className="flex flex-row items-center gap-2">
                  <Image src="/ic_star.svg" alt="star" width={18} height={18} className="object-contain" />
                  <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
               </div>
            </div>
         </div>
      </MotionDiv>
   )
}
