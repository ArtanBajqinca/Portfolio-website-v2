import React from "react";
import { ProjectCard } from "@/components/ProjectCard";
import programmingProjects from "/data/programming-projecs.json";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Navbar />
      {/* <div className="w-full m-3 flex flex-wrap gap-5 justify-center items-center">
        {programmingProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            labels={project.labels}
            link={project.link}
          />
        ))}
      </div> */}
    </div>
  );
}
