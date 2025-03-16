export interface CareerTypes {
  title: string;
  date: string;
  duration: string;
  location: string;
  tags: string[];
}

export default function CareerPage() {
  const careerList: CareerTypes[] = [
    {
      title: 'LuaSoft',
      date: 'Feb. 2024 - Aug. 2024',
      duration: '7 months',
      location: 'Yongin, Gyeonggi, South Korea',
      tags: [
        'JavaScript',
        'Problem Solving',
        'System Optimization',
        'Debugging',
        'QA Collaboration',
      ],
    },
    {
      title: 'VIEWCOMMZ',
      date: 'Sep. 2023 - Dec. 2023',
      duration: '4 months',
      location: 'Seoul, South Korea',
      tags: [
        'TypeScript',
        'Next.js',
        'Tailwind CSS',
        'CRUD Operations',
        'CI/CD Pipelines',
        'Design System',
      ],
    },
    {
      title: 'LuaSoft',
      date: 'Jul. 2022 - Jan. 2023',
      duration: '7 months',
      location: 'Yongin, Gyeonggi, South Korea',
      tags: [
        'JavaScript',
        'Problem Solving',
        'System Optimization',
        'UX Improvement',
        'Refactoring',
      ],
    },
  ];

  return (
    <div className="h-full w-full lg:flex lg:h-[cal(100vh-10rem)] lg:w-[70rem] lg:flex-col lg:justify-center xl:-mt-[10rem] xl:flex xl:w-[70rem] xl:flex-col xl:justify-center">
      <h1 className="text-[1.625rem] font-bold text-[#1C1E22]">Careers</h1>
      <p className="flex h-fit w-full">
        I have almost 2 years of experience as a frontend developer <br />
      </p>
      <div className="h-full w-full lg:flex lg:h-[cal(100vh-10rem)] lg:w-[70rem] lg:flex-col lg:justify-center xl:-mt-[10rem] xl:flex xl:w-[70rem] xl:flex-col xl:justify-center">
        {careerList.map((career, index) => (
          <div key={index} className="my-[1.5rem] flex">
            <div className="flex items-center bg-[#F2F6FC] px-[0.5rem]"></div>
            <div className="pl-[1rem]">
              <p className="text-[18px] font-bold text-[#0F54C2]">
                {career.title}
              </p>
              <p className="text-[14px] text-[#666666]">
                {career.date} | {career.duration}
              </p>
              <p className="text-[14px] text-[#666666]">{career.location}</p>
              <p className="text-[14px] text-[#666666]">
                {career.tags.join(', ')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
