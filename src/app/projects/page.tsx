import ProjectCard, { ProjectCardProps } from './components/ProjectCard';

export default function ProjectPage() {
  const projectsList: ProjectCardProps[] = [
    {
      title: 'Lecue',
      link: 'https://github.com/Team-Lecue/Lecue-Client',
      description: 'Our heartfelt messages for our favorite, Lecue 💌',
      tags: 'TypeScript',
    },
    {
      title: 'Tutice',
      link: 'https://github.com/Gwasuwon-shot/Tutice_Client',
      description: '🌳 Lesson 🔔 Notification 🍎 Service',
      tags: 'TypeScript',
    },
    {
      title: 'bbogak',
      link: 'https://github.com/depromeet/bbo-gak-client',
      description:
        'Crack open your lucky fortune cookie! 🥠💥 A job offer fortune 🍀 is waiting for you!',
      tags: 'TypeScript',
    },
    {
      title: 'Future Naming Center',
      link: 'https://github.com/eunbeann/future-name-project',
      description:
        "A fictional website brand where a future AI-driven naming studio converts users' names into a coded language",
      tags: 'TypeScript',
    },
  ];

  return (
    <div className="h-full w-full lg:flex lg:h-[cal(100vh-10rem)] lg:w-[70rem] lg:flex-col lg:justify-center xl:-mt-[10rem] xl:flex xl:w-[70rem] xl:flex-col xl:justify-center">
      <h1 className="text-[1.625rem] font-bold text-[#1C1E22]">Projects</h1>
      <p className="flex h-fit w-full">
        I love to create a project as a team <br />
        {`Here are some of the projects I've worked on as a frontend developer.`}
      </p>
      <div className="my-[3rem] grid gap-2 lg:grid-cols-2 lg:gap-[1.8rem] xl:grid-cols-2 xl:gap-[1.8rem]">
        {projectsList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
