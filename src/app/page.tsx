import Image from "next/image";
import adBannersData from "../lib/adBanners.json";
import { spicy_rice } from "@/lib/fonts";
import BannerManager from "@/components/BannerManager";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-r from-violet-200 to-pink-200 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <Image src="/semicircular.png" width={150} height={250} className="lg:block hidden sm:hidden md:hidden absolute top-0 right-0 z-50" alt="circle" />
      <Image src="/leftsemicircular.png" width={150} height={250} className="lg:block hidden sm:hidden md:hidden absolute top-[20rem] left-0 z-50" alt="circle" />

      <div className={`${spicy_rice.className} text-5xl md:text-6xl lg:text-8xl z-50 text-center pb-7`}>GrowEasyy - AI Banners</div>
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-white bg-opacity-30 rounded-xl shadow-2xl p-6 sm:p-10 w-[80%] mx-auto">
          <div className="max-w-3xl  mx-auto">
            <input 
              placeholder="Create banners for GrowEasyy" 
              className="w-full px-4 py-3 text-lg shadow-2xl rounded-xl mb-6" 
              type="text" 
            />
            <button className="bg-gradient-to-r from-violet-300 to-pink-300 hover:bg-gradient-to-bl hover:from-pink-300 hover:to-violet-300 mx-auto w-full lg:w-full sm:w-full shadow-xl px-6 py-3 flex justify-center items-center text-white font-bold rounded-full mb-10 text-xl transition-all">
              Generate Banners
            </button>

            <BannerManager initialBanners={adBannersData} />
          </div>
        </div>
      </div>
    </div>
  );
}