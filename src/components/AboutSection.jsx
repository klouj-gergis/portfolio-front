import StatusBar from "./StatusBar"
import  {motion} from "framer-motion";


const AboutSection = () => {
  return (
    <section className="w-full flex flex-col gap-30 justify-center items-center">
      <StatusBar />
      <div className="h-screen  w-full flex">
        <div className="w-3/6 text-primary flex flex-col gap-10 justify-center p-20">
          <h3 className="text-3xl font-bold">About Magomy.</h3>
          <p className="w-5/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem doloremque pariatur in. Suscipit asperiores officiis cum fuga autem, ad nam dolor neque. Perferendis, sit soluta? Blanditiis vitae distinctio aperiam?</p>
          <button className="bg-accent self-start py-2 px-4 text-white font-semibold  cursor-pointer hover:bg-hover">Contact</button>
        </div>
        <div className="w-3/6 flex items-center justify-center">
          <motion.img
          style={{ willChange: "transform" }}
          initial={{ y: 50, opacity: 0.5 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.5 }} 
          src="./about.jpg" className="h-4/6 border-2 border-accent" />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
