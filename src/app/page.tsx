import CareerPage from './career/page';
import ContactPage from './contact/page';
import Home from './home/page';
import ProjectPage from './projects/page';
import VolunteerPage from './volunteer/page';

export default function Main() {
  return (
    <>
      <div className="scrollbar-hidden flex h-[100vh-10rem] w-screen flex-col gap-y-[8rem] overflow-auto overflow-x-hidden xl:block xl:h-full xl:snap-y xl:snap-mandatory">
        <div className="flex h-fit xl:h-screen">
          <Home />
        </div>

        <div className="flex h-fit xl:h-screen">
          <CareerPage />
        </div>

        <div className="flex h-fit xl:h-screen">
          <ProjectPage />
        </div>

        <div className="flex h-fit xl:h-screen">
          <VolunteerPage />
        </div>

        <div className="flex h-fit xl:h-screen">
          <ContactPage />
        </div>
      </div>
    </>
  );
}
