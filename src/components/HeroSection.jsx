import { ArrowDown } from "lucide-react";


const HeroSection = () => {
  return (
    <section className="h-screen w-screen md:w-screen md:h-screen relative" >
      <div className="w-full h-full absolute top-0 left-0 z-0 ">
        <img src="./video-editing.jpg" alt="background image" className="w-full h-full absolute top-0 left-0 z-0" />
        <div className="w-full h-full backdrop-blur z-10 bg-black/40">
        </div>
      </div>
      <div className="absolute top-0 left-0 z-10">
      <h2 className="w-full p-10 text-5xl font-bold text-white text-montserrat items-center"><span>MAGOMY</span> <span className="">ماجومي</span></h2>
      <p className="px-10 text-lg text-white/80">Visual storyteller, Creative Designer </p>
      <div className="w-full p-10">
      <img src="./about.jpg" alt="hero image" className="rounded-2xl shadow-[13px_13px_0px_-3px_#ffffff]" />
      </div>
      <div className="flex gap-5 justify-center items-center">
        <button className="border px-3 py-2 bg-accent text-white font-bold shadow-[3px_3px_0px_0px_#323232] rounded-lg hover:bg-white hover:text-accent active:bg-white active:text-accent">Let's Talk</button>
        <button className="border px-3 py-2 bg-accent text-white font-bold shadow-[3px_3px_0px_0px_#323232] rounded-lg hover:bg-white hover:text-accent active:bg-white active:text-accent">My Work</button>
      </div>
      </div>
    </section>
  )
}

export default HeroSection
