import bookMark from '@/assets/icons/bookMark.svg';
import dragHandle from '@/assets/icons/dragHandle.svg';
import Image from 'next/image';
import Link from 'next/link';

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="h-[9rem] rounded-[0.5rem] border-[1px] border-gray4 bg-[#F2F6FC] px-[1.6rem] py-[1rem] xl:max-w-[33rem]">
        <div className="mb-[0.6rem] flex justify-between gap-[0.5rem] font-bold">
          <div className="flex items-center gap-[0.5rem] font-bold">
            <Image src={bookMark} alt={bookMark} />
            <p className="text-[18px] font-bold text-[#0F54C2]">{title}</p>
          </div>
          <Image src={dragHandle} alt={dragHandle} />
        </div>
        <p className="mb-[0.6rem] h-[3rem] whitespace-break-spaces text-[14.5px] leading-[17px]">
          {description}
        </p>
        <div className="flex items-center gap-[0.2rem]">
          <div className="h-[0.8rem] w-[0.8rem] rounded-full border-[#316DAF] bg-[#3078C6]" />
          <p className="text-[13px]">{tags}</p>
        </div>
      </div>
    </Link>
  );
}
