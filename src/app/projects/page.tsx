import ProjectCard from './components/ProjectCard';

export default function ProjectPage() {
  return (
    <>
      <h1 className="text-[1.625rem] font-bold text-[#1C1E22]">Projects</h1>
      <p className="mb-[3rem] w-[50%]">
        {`I’m a front-end developer with almost 3 years of experience. I currently
        specialize in Next.js, TypeScript, and Tailwind but I'm al`}
      </p>
      <div className="flex flex-wrap gap-[1.8rem]">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}
