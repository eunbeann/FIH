import eunbean from '@/assets/images/eunbean.jpeg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center xl:mx-10 xl:flex-row">
      <div className="flex h-full w-[50%] flex-col justify-center">
        <h1 className="py-[30px] text-[80px] leading-[80px] -tracking-[5px]">
          Hi <br /> This is Eunbean
        </h1>
        <h5>
          I am a frontend developer who enjoys sharing and empathizing with
          others about new experiences. I strive tirelessly to develop clean and
          readable code conducive to collaboration, and to collaborate on
          creating web pages that everyone can empathize with.
        </h5>
      </div>

      <div className="relative mt-[100px] flex w-[50%] max-w-[500px] items-center justify-center pb-4">
        <div className="absolute ml-16 mt-16 h-[20rem] w-[16rem] rounded-md bg-[#9FA4B0]" />
        <Image
          src={eunbean}
          alt="eunbeanProfilePic"
          className="relative z-40 h-[20rem] w-[16rem] rounded-md object-cover"
        />
        <div className="absolute z-50 -ml-[10rem] -mt-[18rem] flex shrink-0 -rotate-[23deg] items-center justify-center bg-gray-700 px-[3rem] py-[0.3rem] text-[1rem] text-[#DCE5EC]">
          # OPEN TO WORK
        </div>
      </div>
    </div>
  );
}
