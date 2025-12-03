import { motion, useTransform, useSpring} from 'framer-motion';


const ProjectCard = ({title, description, i, targetScale, range, progress, image}) => {
  const rowScale = useTransform(progress, range, [1, targetScale]);
  const scale = useSpring(rowScale, { stiffness: 120, damping: 20, mass: 0.3 });
  return (
    <div className="w-full h-screen  flex flex-col items-center justify-center sticky top-0">
      
    <motion.div style={ {willChange: "transform", y: `calc(-5% + ${i * 25}px)`, scale}} className={`w-9/12 h-10/12 flex flex-col items-center justify-center text-white  relative  scale-[${i}] bg-accent overflow-hidden`}>
      <img src={image} alt={title} className="z-0 w-full" />
      <div className="bg-black/40 w-full h-full z-10 absolute flex items-center justify-center">
        <h4 className="text-8xl font-bold">{title.toUpperCase()}</h4>
      </div>
    </motion.div>
    </div>
  )
}

export default ProjectCard
