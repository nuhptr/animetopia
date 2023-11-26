import AnimeCard, { AnimeProps } from "@/components/AnimeCard"
import LoadMore from "../components/LoadMore"
import { data } from "./_data"

export default async function Home() {
   return (
      <main className="flex flex-col px-8 py-16 sm:p-16 gap-10">
         <h2 className="text-3xl font-bold text-white">Explore Anime</h2>

         <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {data.map((item: AnimeProps, index) => (
               <AnimeCard key={item.id} anime={item} index={index} />
            ))}
         </section>
         <LoadMore />
      </main>
   )
}
