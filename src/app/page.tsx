import ContactPage from './contact/page';
import Home from './home/page';
import ProjectPage from './projects/page';
import VolunteerPage from './volunteer/page';

export default function Main() {
  return (
    <div className="scrollbar-hidden flex h-full flex-col gap-y-[8rem] overflow-auto xl:block xl:h-full xl:snap-y xl:snap-mandatory">
      <div className="flex h-fit xl:h-screen xl:snap-start xl:items-center xl:justify-center">
        <Home />
      </div>

      <div className="flex h-fit items-center justify-center xl:h-full xl:snap-start">
        <ProjectPage />
      </div>

      <div className="flex h-fit items-center justify-center xl:h-full xl:snap-start">
        <VolunteerPage />
      </div>

      <div className="flex h-fit items-center justify-center xl:h-full xl:snap-start">
        <ContactPage />
      </div>
    </div>
  );
}
