import Image from "next/image";
import React from "react";
import { Timeline } from "./custom/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2023 - Present",
      content: (
        <div className="space-y-4">
          <h1 className="text-xl font-bold">TheMessCompany</h1>
          <ul className="list-disc">
            <li>
              Developed and implemented front-end user experience improvements
              for web applications
            </li>
            <li>
              Optimized database interactions using Prisma ORM to enhance system
              performance
            </li>
            <li>
              Configured PostgreSQL database for efficient data management and
              storage
            </li>
            <li>
              Collaborated with cross-functional teams to deliver scalable web
              solutions
            </li>
            <li>
              Implemented responsive design principles to ensure optimal user
              interface functionality
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[...]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2020 - Aug 2021",
      content: (
        <div className="space-y-4">
          <h1 className="text-xl font-bold">
            Ultimate Infosec Technology Pvt Ltd
          </h1>
          <ul className="list-disc">
            <li>
              Led the design and development of scalable SAAS applications,
              leveraging cutting-edge FRONT-END technologies like REACT,
              TYPESCRIPT, and modern WEB DEVELOPMENT frameworks to create
              robust, user-centric software solutions that meet complex business
              requirements.
            </li>
            <li>
              Engineered responsive and dynamic user interfaces using REACTJS,
              ensuring seamless cross-platform experiences with HTML5, CSS3, and
              JAVASCRIPT, optimizing performance across diverse device
              ecosystems.
            </li>
            <li>
              Developed secure and high-performance backend APIs utilizing
              innovative frameworks like BUN, ELYSIA, and NODE.JS, demonstrating
              advanced expertise in RESTFUL API development and modern web
              application architecture.
            </li>
            <li>
              Collaborated with cross-functional teams to deliver scalable web
              solutions
            </li>
            <li>
              Implemented comprehensive POSTGRESQL database solutions, designing
              efficient data models with PRISMA ORM and optimizing database
              interactions to support complex application data management and
              retrieval strategies.
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[...]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div className="space-y-4">
          <h1 className="text-xl font-bold">Coditation Systems</h1>
          <ul className="list-disc">
            <li>
              Designed and built a responsive Angular UI for seamless user
              experience.
            </li>
            <li>
              Implemented Express backend APIs, ensuring high availability,
              security, and performance.
            </li>
            <li>
              Communicated effectively with stakeholders to align goals and
              expectations.
            </li>
            <li>
              Developed microservices for efficient log handling from multiple
              UNIX systems.
            </li>
            <li>
              Introduced database support using MySQL for secure and reliable
              log backups.
            </li>
            <li>Utilized XML and JSON for data exchange and configuration.</li>
            <li>
              Documented code and processes thoroughly to ensure maintainability
              and knowledge sharing.
            </li>
            <li>
              Quickly resolved bugs and implemented enhancements to improve
              system reliability and performance.
            </li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[...]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
