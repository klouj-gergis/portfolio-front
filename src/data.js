import { 
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiApple,
  SiGoogleslides,
  SiAudacity,
  SiAdobeaudition,
} from "react-icons/si";


export const projects = [
  {
    title: 'first project',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem doloremque pariatur in. Suscipit asperiores officiis cum fuga autem, ad nam dolor neque. Perferendis, sit soluta? Blanditiis vitae distinctio aperiam?",
    image: './land-o-lakes-inc-DWv3vEGKW1E-unsplash.jpg'
  },
  {
    title: 'second project',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem doloremque pariatur in. Suscipit asperiores officiis cum fuga autem, ad nam dolor neque. Perferendis, sit soluta? Blanditiis vitae distinctio aperiam?",
    image: './land-o-lakes-inc-UnSFmJCCrW0-unsplash.jpg'
  },
  {
    title: 'third project',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem doloremque pariatur in. Suscipit asperiores officiis cum fuga autem, ad nam dolor neque. Perferendis, sit soluta? Blanditiis vitae distinctio aperiam?",
    image: './luigi-ritchie-3ZAKE8qVTK0-unsplash.jpg'
  },
  {
    title: 'fourth project',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi exercitationem doloremque pariatur in. Suscipit asperiores officiis cum fuga autem, ad nam dolor neque. Perferendis, sit soluta? Blanditiis vitae distinctio aperiam?",
    image: './philippe-bontemps-kZPxXgwOETQ-unsplash.jpg'
  },
 
]

export const skills = [
  {
    title: "Video Editing",
    tools: [
      { name: "Premiere Pro", icon: SiAdobepremierepro, color: "#9999ff" },
    ],
    description: "Experienced in video editing using industry-standard software."
  },
  {
    title: "Graphic Design",
    tools: [
      { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
      { name: "Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
      { name: "Canva", icon: SiCanva, color: "#00C4CC" }
    ],
    description: "Skilled in graphic design using professional design tools."
  },
  {
    title: "Presentation Design",
    tools: [
      { name: "Keynote", icon: SiApple, color: "#444" },
      { name: "Google Slides", icon: SiGoogleslides, color: "#F4B400" }
    ],
    description: "Crafting engaging presentation designs."
  },
  {
    title: "Voice Over",
    tools: [
      { name: "Audacity", icon: SiAudacity, color: "#1CB27C" },
      { name: "Adobe Audition", icon: SiAdobeaudition, color: "#9999ff" },
    ],
    description: "High-quality audio recording and editing."
  }
];
