import psyDuck from '@/assets/images/psyduck.jpeg';
import Image from 'next/image';

export default function ExperienceBox() {
  return (
    <div className="flex flex-col items-center">
      <p className="pb-1 text-[12px]">Naver 1784 School</p>
      <Image
        src={psyDuck}
        alt="psyDuck"
        className="h-[12rem] w-[16rem] rounded-md bg-red-600 object-fill"
      />

      {/* <Image alt="mockImage" src="https://picsum.photos/200/300" fill /> */}
    </div>
  );
}
