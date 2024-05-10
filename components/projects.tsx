import { Fragment } from "react";

import { projectsData } from "@/lib/data";
import Project from "./project";
import SectionHeading from "./section-heading";

export default function Projects() {
  return (
    <section>
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
