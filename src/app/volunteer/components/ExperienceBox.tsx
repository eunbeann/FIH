import Image, { StaticImageData } from 'next/image';

interface ExperienceBoxProps {
  title: string;
  src: StaticImageData;
}

export default function ExperienceBox({ title, src }: ExperienceBoxProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="flex h-12 items-center justify-center pb-1 text-center text-[16px]">
        {title}
      </p>
      <Image
        src={src}
        alt="Experience Images"
        className="rounded-md object-fill xl:h-[12rem] xl:w-[315px]"
      />
    </div>
  );
}
