import Image from "next/image"

export default function LoadMore() {
   return (
      <section className="flex items-center justify-center w-full">
         <div>
            <Image src="./spinner.svg" alt="spinner" width={56} height={56} className="object-contain" />
         </div>
      </section>
   )
}
