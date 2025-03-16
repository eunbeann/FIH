import eunbean from '@/assets/images/eunbean.jpeg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="mt-[2rem] flex h-[calc(100vh-10rem)] w-full flex-col items-center lg:mx-10 lg:mt-0 lg:flex-row lg:justify-center xl:mx-10 xl:mt-0 xl:flex-row xl:justify-center">
      <div className="flex h-full flex-col justify-center lg:w-[90%] xl:w-[40%] xl:justify-center">
        <h1 className="pb-[20px] pt-[20px] text-[50px] font-bold leading-[50px] -tracking-[5px] lg:text-[60px] lg:leading-[60px] xl:py-[30px] xl:text-[80px] xl:leading-[80px]">
          Hi <br /> This is Eunbean
        </h1>
        <h5>
          I am a frontend developer who enjoys sharing and empathizing with
          others about new experiences. I strive tirelessly to develop clean and
          readable code conducive to collaboration, and to collaborate on
          creating web pages that everyone can empathize with.
        </h5>
      </div>

      <div className="relative mt-[5rem] flex w-[50%] max-w-[500px] items-center justify-center pb-4 xl:mt-[100px]">
        <div className="absolute ml-10 mt-10 h-[11.8rem] w-[9.3rem] rounded-md bg-[#9FA4B0] xl:ml-16 xl:mt-16 xl:h-[20rem] xl:w-[16rem]" />
        <Image
          src={eunbean}
          alt="eunbeanProfilePic"
          className="relative z-40 h-[11.8rem] w-[9.3rem] rounded-md object-cover lg:h-[18rem] lg:w-[14rem] xl:h-[20rem] xl:w-[16rem]"
        />
        <div className="absolute z-50 -ml-[7rem] -mt-[12rem] flex shrink-0 -rotate-[23deg] items-center justify-center bg-gray-700 px-[1rem] py-[0.3rem] text-[1rem] text-[#DCE5EC] lg:-ml-[10rem] lg:-mt-[18rem] lg:px-[3rem] xl:-ml-[10rem] xl:-mt-[18rem] xl:px-[3rem]">
          # OPEN TO WORK
        </div>
      </div>
    </div>
  );
}
