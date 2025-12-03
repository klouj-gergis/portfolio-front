import React from 'react'
import {projects} from "../data"
import ProjectCard from "./ProjectCard"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress} = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <section id="projects" className="w-full min-h-screen flex flex-col items-center justify-center ">
      <h2 className="text-4xl text-accent font-bold mb-10">Projects Section</h2>
      <div ref={container} className="w-full flex flex-col items-center justify-center">
      {
        projects.map((project, index) => {
          const targetScale = 1 - ((projects.length - index) * 0.05);
          return (
            
              <ProjectCard {...project} i={index} targetScale={targetScale} progress={scrollYProgress} range={[index * 0.2, 1]} key={index} />
            
          )
        })
      }
      </div>
    </section>
  )
}

export default Projects
