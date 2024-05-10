"use client";

import { Fragment } from "react";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Project from "./project";
import SectionHeading from "./section-heading";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section id="projects" className="scroll-mt-28" ref={ref}>
      <SectionHeading>My Project</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
