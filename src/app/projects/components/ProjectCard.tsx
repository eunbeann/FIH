import bookMark from '@/assets/icons/bookMark.svg';
import dragHandle from '@/assets/icons/dragHandle.svg';
import Image from 'next/image';

export default function ProjectCard() {
  return (
    <div className="w-[32rem] rounded-[0.5rem] border-[1px] border-gray4 bg-[#F2F6FC] px-[1.6rem] py-[1rem]">
      <div className="mb-[0.6rem] flex justify-between gap-[0.5rem] font-bold">
        <div className="flex items-center gap-[0.5rem] font-bold">
          <Image src={bookMark} alt={bookMark} />
          <p className="font-bold text-[#0F54C2]">Lecue</p>
        </div>
        <Image src={dragHandle} alt={dragHandle} />
      </div>
      <p className="mb-[0.6rem] whitespace-break-spaces">
        {`Our heartfelt message for out favourite, Lecue\n최애를 위한 우리들의 롤링페이퍼, Lecue`}
      </p>
      <div className="flex items-center gap-[0.2rem]">
        <div className="h-[0.8rem] w-[0.8rem] rounded-full border-[#316DAF] bg-[#3078C6]" />
        <p>TypeScript</p>
      </div>
    </div>
  );
}
