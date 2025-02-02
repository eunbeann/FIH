import ContactPage from './contact/page';
import Home from './home/page';
import ProjectPage from './projects/page';
import VolunteerPage from './volunteer/page';

export default function Main() {
  return (
    <div className="scrollbar-hidden h-full overflow-auto xl:h-[calc(100vh-10.5rem)] xl:snap-y xl:snap-mandatory">
      <div className="h-full xl:flex xl:snap-start xl:items-center xl:justify-center">
        <Home />
      </div>

      <div className="flex h-screen items-center justify-center xl:snap-start">
        <ProjectPage />
      </div>

      <div className="flex h-screen items-center justify-center xl:snap-start">
        <VolunteerPage />
      </div>

      <div className="flex h-screen items-center justify-center xl:snap-start">
        <ContactPage />
      </div>
    </div>
  );
}
