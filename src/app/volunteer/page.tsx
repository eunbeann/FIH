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
    title: 'LikeLion',
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
    title: 'Mind Photo Studio',
    src: heartGallery,
  },
  {
    title: 'Goormthon Univ Jeju',
    src: jeju,
  },
  {
    title: 'Naver 1784 School',
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

  console.log(groupItems(volunteerList, 6));

  return (
    <div className="h-full w-full">
      <h1 className="mb-[3rem] text-[1.625rem] font-bold text-[#1C1E22]">
        Volunteer Experience
      </h1>
      <div className="my-[3rem] gap-[1.8rem]">
        <Carousel>
          <CarouselContent>
            {groupItems(volunteerList, 6).map(
              (group, index) => (
                console.log('group :', group),
                (
                  <CarouselItem key={index} className="grid grid-cols-3 gap-6">
                    {group.map((item, subIndex) => (
                      <ExperienceBox
                        key={subIndex}
                        title={item.title}
                        src={item.src}
                      />
                    ))}
                  </CarouselItem>
                )
              ),
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
