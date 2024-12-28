import ExperienceBox from './components/ExperienceBox';

export default function page() {
  return (
    <div>
      <h1 className="mb-[3rem] text-[1.625rem] font-bold text-[#1C1E22]">
        Volunteer Experience
      </h1>
      <div className="flex flex-wrap gap-[1.8rem]">
        <ExperienceBox />
        <ExperienceBox />
        <ExperienceBox />
        <ExperienceBox />
        <ExperienceBox />
        <ExperienceBox />
      </div>
    </div>
  );
}
