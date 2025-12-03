import Counter from "./Counter";
import {motion} from "framer-motion";
import { useRef, useEffect } from "react";

const StatusBar = () => {
  
 
  return (
    <div
    className="  flex justify-around items-center text-black bg-white text-lg font-roboto-mono ">
      
        <Counter start={10} end={36} duration={500} title="Projects" />
        <Counter start={10} end={22} duration={500} title="Clients" />
        <Counter end={5} duration={500} title="Experience" note="Y" />
      
      
      
    </div>
  )
}

export default StatusBar
