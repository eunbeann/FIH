import bbeot1 from '@/assets/images/volunteer/bbeot1.png';
import bbeot2 from '@/assets/images/volunteer/bbeot2.png';
import danpoong from '@/assets/images/volunteer/danpoong.png';
import duksungthon from '@/assets/images/volunteer/duksungthon.png';
import heartGallery from '@/assets/images/volunteer/heartGallery.png';
import jeju from '@/assets/images/volunteer/jeju.png';
import likelion from '@/assets/images/volunteer/likelion.png';
import naver from '@/assets/images/volunteer/naver1784.png';
import yeogithon from '@/assets/images/volunteer/yeogithon.png';

import ExperienceBox from './components/ExperienceBox';

const volunteerList = [
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
    title: 'LikeLion',
    src: likelion,
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

export default function page() {
  return (
    <div className="w-full">
      <h1 className="mb-[3rem] text-[1.625rem] font-bold text-[#1C1E22]">
        Volunteer Experience
      </h1>
      <div className="my-[3rem] grid grid-cols-3 grid-rows-2 gap-[1.8rem]">
        {volunteerList.map((item, index) => (
          <ExperienceBox key={index} title={item.title} src={item.src} />
        ))}
      </div>
    </div>
  );
}
