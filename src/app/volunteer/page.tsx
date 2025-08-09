import bbeot1 from '@/assets/images/volunteer/bbeot1.png';
import bbeot2 from '@/assets/images/volunteer/bbeot2.png';
import danpoong from '@/assets/images/volunteer/danpoong.png';
import duksungthon from '@/assets/images/volunteer/duksungthon.png';
import heartGallery from '@/assets/images/volunteer/heartGallery.png';
import jeju from '@/assets/images/volunteer/jeju.png';
import likelion from '@/assets/images/volunteer/likelion.png';
import naver from '@/assets/images/volunteer/naver1784.png';
import yeogithon from '@/assets/images/volunteer/yeogithon.png';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ExperienceBox from './components/ExperienceBox';

const volunteerList = [
  {
    title: 'LIKELION',
    src: likelion,
  },
  {
    title: 'BEOTKKOTTHON',
    src: bbeot1,
  },
  {
    title: 'BEOTKKOTTHON2',
    src: bbeot2,
  },
  {
    title: 'DANPOONGTHON',
    src: danpoong,
  },
  {
    title: "DUKSUNG WOMEN'S UNIVERSITY HACKATHON",
    src: duksungthon,
  },
  {
    title: 'MIND PHOTO STUDIO',
    src: heartGallery,
  },
  {
    title: 'GOORMTHON UNIV JEJU',
    src: jeju,
  },
  {
    title: 'NAVER 1784 SCHOOL',
    src: naver,
  },
  {
    title: 'YEOGITHON',
    src: yeogithon,
  },
];

export default function VolunteerPage() {
  const groupItems = <T,>(items: T[], groupSize: number): T[][] => {
    const groups = [];
    for (let i = 0; i < items.length; i += groupSize) {
      groups.push(items.slice(i, i + groupSize));
    }
    return groups;
  };

  return (
    <div className="flex w-[20rem] flex-col px-3 lg:mt-0 lg:h-full lg:w-[70rem] lg:justify-center lg:px-0 xl:h-full xl:w-[70rem] xl:justify-center xl:px-0">
      <h1 className="mb-[1rem] w-full text-[1rem] font-bold text-[#1C1E22] lg:pl-[4%] lg:text-[1.625rem] xl:pl-[4%] xl:text-[1.625rem]">
        Volunteer Experience
      </h1>

      {/* desktop */}
      <div className="hidden lg:flex lg:w-full lg:justify-center xl:flex xl:w-full xl:justify-center">
        {/* <Carousel className="w-[90%]"> */}
        <Carousel className="w-full">
          <CarouselContent>
            {groupItems(volunteerList, 6).map((group, index) => (
              <CarouselItem key={index} className="grid grid-cols-3 gap-6">
                {group.map((item, subIndex) => (
                  <ExperienceBox
                    key={subIndex}
                    title={item.title}
                    src={item.src}
                  />
                ))}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="default" />
          <CarouselNext variant="default" />
        </Carousel>
      </div>

      {/* mobile */}
      <div className="flex h-fit w-full items-center justify-center lg:hidden xl:hidden">
        <Carousel className="w-[75%]">
          <CarouselContent>
            {volunteerList.map((item, index) => (
              <CarouselItem key={index} className="">
                <ExperienceBox title={item.title} src={item.src} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-[3rem]">
            <CarouselPrevious variant="default" />
            <CarouselNext variant="default" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
