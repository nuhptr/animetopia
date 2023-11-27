import Image from "next/image"

export default function Footer() {
   return (
      <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
         <p className="text-base font-bold text-white">@2023 EpicAnimeVault</p>
         <Image src="/ic_logo.svg" alt="logo" width={47} height={44} className="object-contain" />
         <div className="flex items-center gap-6">
            <Image src="/ic_tiktok.svg" alt="logo" width={19} height={19} className="object-contain" />
            <Image src="/ic_instagram.svg" alt="logo" width={19} height={19} className="object-contain" />
            <Image src="/ic_twitter.svg" alt="logo" width={19} height={19} className="object-contain" />
         </div>
      </footer>
   )
}
