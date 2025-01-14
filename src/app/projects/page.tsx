import ProjectCard from './components/ProjectCard';

export default function ProjectPage() {
  return (
    <div className="w-full">
      <h1 className="text-[1.625rem] font-bold text-[#1C1E22]">Projects</h1>
      <p className="w-[50%] whitespace-pre">
        I love to create a project as a team <br />
        {`Here are some of the projects I've worked on as a frontend developer.`}
      </p>
      {/* <div className="flex flex-wrap justify-center gap-[1.8rem]"> */}
      <div className="my-[3rem] grid grid-cols-2 gap-[1.8rem]">
        <ProjectCard
          link="https://github.com/Team-Lecue/Lecue-Client"
          title="Lecue"
          description="Our heartfelt messages for our favorite, Lecue 💌"
          tags={'TypeScript'}
        />
        <ProjectCard
          link="https://github.com/Gwasuwon-shot/Tutice_Client"
          title="Tutice"
          description="🌳Lesson 🔔Notification 🍎Service"
          tags={'TypeScript'}
        />
        <ProjectCard
          link="https://github.com/depromeet/bbo-gak-client"
          title="bbogak"
          description="행운의 포춘쿠키를🥠 뽀각!💥 깨보세요! 🍀취뽀행운🍀이 당신을 기다려요!"
          tags={'TypeScript'}
        />
        <ProjectCard
          link="https://github.com/eunbeann/future-name-project"
          title="Future Naming Center"
          description="A fictional website brand where a future AI-driven naming studio converts users' names into a coded language"
          tags={'TypeScript'}
        />
      </div>
    </div>
  );
}
