/* import { skills } from "../data";
import DropdownItem from "./DropdownItem";
import { useState, useEffect } from "react";
import { ArrowDown, ArrowRight } from "lucide-react"

import videoEditing from "../assets/skills/video-editing.jpg";
import graphicDesign from "../assets/skills/graphic-design.jpg";
import voiceOver from "../assets/skills/voice-over.jpg";
import presentationDesign from "../assets/skills/presentation-design.jpg";

function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(videoEditing);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const images = {
    "video editing": videoEditing,
    "graphic design": graphicDesign,
    "voice over": voiceOver,
    "presentation design": presentationDesign,
  };

  

  return (
    <section className="w-full min-h-screen flex  pt-20">
      <div className="w-6/12 h-screen flex flex-col gap-20  p-10">
        <h3 className="text-5xl font-bold text-accent">My Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li
              key={index}
              onMouseEnter={() =>
                setHoveredSkill(images[skill.title.toLowerCase()])
              }
              onClick={() =>
                setSelectedSkill(
                  selectedSkill === skill.title ? null : skill.title
                )
              }
            > 
              <DropdownItem
                index={index}
                title={skill.title}
                tools={skill.tools}
                open={selectedSkill === skill.title}
              />
            </li>
          ))}
        </ul>
      </div>
      
    </section>
  );
}

export default SkillsSection;
 */