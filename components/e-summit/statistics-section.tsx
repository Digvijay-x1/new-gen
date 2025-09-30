import Image from "next/image";

const statsData = [
  {
    value: "50000+",
    description: "attendees gathered at E-Summit making it one of the largest student run entrepreneurial congregations in Asia",
  },
  {
    value: "1000+",
    description: "startups associated with us, driving innovation and shaping the entrepreneurial ecosystem",
  },
  {
    value: "30+",
    description: "events of E-Summit, bringing together knowledge, experience, and fresh ideas under one roof",
  },
];

const StatisticsSection = () => {
  return (
    <section className="bg-black py-20 md:py-28 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-24">
          <div className="flex w-full justify-center md:w-2/5">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7ff690fe-48ef-42f3-947f-08e13cecb866-ecell-in/assets/svgs/logo-element-1.svg?"
              alt="E-Summit 3D Logo Element"
              width={488}
              height={427}
              className="h-auto w-full max-w-[280px] md:max-w-none"
            />
          </div>
          <div className="w-full space-y-12 text-center md:w-3/5 md:text-left">
            {statsData.map((stat, index) => (
              <div key={index}>
                <h2 className="text-primary font-bold text-[64px] leading-none tracking-tight">
                  {stat.value}
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm font-normal uppercase tracking-wider text-white md:mx-0">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;