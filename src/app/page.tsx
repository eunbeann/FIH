import eunbean from '@/assets/images/eunbean.jpeg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="mx-10 flex h-full flex-col justify-center">
      <h1 className="py-[30px] text-[89px] leading-[80px] -tracking-[5px]">
        Hi <br /> This is Eunbean
      </h1>
      <h5>
        나는 프론트엔드 개발자 나는 프론트엔드 개발자 나는 프론트엔드 개발자
        나는 프론트엔드 개발자 나는 프론트엔드 개발자 나는 프론트엔드 개발자
        나는 프론트엔드 개발자 나는 프론트엔드 개발자 나는 프론트엔드 개발자
        나는 프론트엔드 개발자 나는 프론트엔드 개발자 나는 프론트엔드 개발자
        나는 프론트엔드 개발자 나는 프론트엔드 개발자 나는 프론트엔드 개발자
        나는 프론트엔드 개발자
      </h5>

      <div className="relative mx-auto flex w-full max-w-[500px] items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute aspect-[300/386] w-full rounded-lg bg-[#9FA4B0] shadow-lg"></div>

        <Image
          src={eunbean}
          alt="eunbeanProfilePic"
          width={300}
          height={386}
          className="relative z-40 aspect-[300/386] w-full rounded-lg object-cover"
        />
        <div className="absolute bottom-[10%] z-50 flex shrink-0 -rotate-[23deg] items-center justify-center gap-[0.6rem] rounded-full bg-gray-800/80 px-[2rem] py-[0.3rem] text-[1rem] text-[#DCE5EC] shadow-md sm:text-[0.875rem]">
          #OPEN TO WORK
        </div>
      </div>
    </div>
  );
}
