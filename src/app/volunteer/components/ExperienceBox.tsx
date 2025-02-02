import Image, { StaticImageData } from 'next/image';

interface ExperienceBoxProps {
  title: string;
  src: StaticImageData;
}

export default function ExperienceBox({ title, src }: ExperienceBoxProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="pb-1 text-[16px]">{title}</p>
      <Image
        src={src}
        alt="psyDuck"
        className="h-[12rem] w-full rounded-md object-fill"
      />
    </div>
  );
}
