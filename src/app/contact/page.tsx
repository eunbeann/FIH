import emailIcon from '@/assets/icons/emailIcon.png';
import githubIcon from '@/assets/icons/githubIcon.png';
import linkedInIcon from '@/assets/icons/linkedInIcon.png';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="mt-7">
      <h1 className="mb-[1rem] text-[1.625rem] font-bold text-[#1C1E22]">
        Contact
      </h1>
      <p className="mb-[3rem] w-[50%]">
        {`I’m a front-end developer with almost 3 years of experience. I currently
        specialize in Next.js, TypeScript, and Tailwind but I'm al`}
      </p>
      <p className="mb-[3rem] w-[50%] underline">{`eunbeann@gmail.com`}</p>
      <div className="flex gap-4">
        <Link
          href="https://github.com/eunbeann"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={githubIcon} alt="githubIcon" width={30} height={30} />
        </Link>
        <Link
          href="https://linkedin.com/in/eunbeann"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={linkedInIcon} alt="linkedInIcon" width={30} height={30} />
        </Link>

        <Link
          href="mailto:eunbeann@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={emailIcon} alt="emailIcon" width={30} height={30} />
        </Link>
      </div>
    </div>
  );
}
