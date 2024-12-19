import eunbean from '@/assets/images/eunbean.jpeg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex h-full items-center justify-center bg-yellow-400">
      <div className="mx-10 flex h-full flex-col bg-slate-400">
        <h1 className="py-[30px] text-[89px] font-bold leading-[80px] -tracking-[5px]">
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
      </div>
      <Image src={eunbean} alt="eunbeanProfilePic" width={300}></Image>
    </div>
  );
}
