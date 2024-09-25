import Image from 'next/image'
import React from 'react'
import ProjectExample from './ProjectExample'

export default function Projects() {
  const projects = [
    {
      "theme": "Educational Platform",
      "title": "Edu+ ",
      "description": "A platform that helps students to learn and practice their skills in different fields, it provides a lot of courses and exercises to help students to improve their skills in different domains.",
      "technologies": ["Nextjs", "Express.js", "MongoDB", "Socket.io"],
      "image": "/edu+.png",
      "isOdd": true,
      "links": {
        "link": "https://edu-plus-nine.vercel.app",
        "github": "https://github.com/Abdousa23/Edu-plus"
      }
    },
    {
      "theme": "Hotel Reservation System",
      "title": "OrgTel",
      "description": "A system for managing hotel reservations, including booking, cancellations, and customer management.",
      "technologies": ["React", "Node.js", "MongoDB"],
      "image": "/orgtel.png",
      "isOdd": false,
      "links": {
        "link": null,
        "github": "https://github.com/Abdousa23/OrgTel"
      }
    }, {
      "theme": "Workshop Management System",
      "title": "mon atelier",
      "description": "A freelance project for managing a workshop, including managing employees, suppliers,machines, and repair orders.",
      "technologies": ["React", "Node.js", "expressJs", "MongoDB"],
      "image": "/monatelier.png",
      "isOdd": true,
      "links": {
        "link": null,
        "github": "https://github.com/Abdousa23/gestion-atelier-frontend",
      }
    },
    {
      "theme": "Portfolio Project",
      "title": "My personal portfolio",
      "description": "A personal portfolio website showcasing projects, skills, and contact information.",
      "technologies": ["NextJS", "Tailwind CSS"],
      "image": "/portfolio.png",
      "isOdd": false,
      "links": {
        "link": "https://saabderrahemaneportfolio.vercel.app/",
        "github": "https://github.com/Abdousa23/portfolio"
      }
    }
  ]
  return (
    <div id='projects' className='mx-auto w-2/3 mb-36  ' >
      <h1 className='text-white text-3xl font-bold my-8 '>My personal Projects</h1>
      <div className='flex flex-col justify-around items-center max-md:w-[85%]'>
        {
          projects.map((project, index) =>
            <ProjectExample key={index} {...project} />)
        }
      </div>
    </div>
  )
}
