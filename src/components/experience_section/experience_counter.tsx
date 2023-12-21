import CountUp from "./counter"; 
const Experience = ({
  text = "Default Text",
  num,
  i,
}: {
  text: string;
  num: number;
  i: number;
}) => {
  return (
    <div
      className={`flex min-w-[243px] flex-col z-[2] ${
        i === 3 ? "" : "lg:border-r"
      } lg:border-primary-100 items-center justify-center gap-4`}
    >
      <h5 className=" text-[50px] lg:text-[85px] tracking-widest leading-[70px] font-dm lg:leading-[106.25px] ">
        <CountUp 
          number = {num}
        />
      </h5>
      <p className="text-white text-base text-center lg:text-lg font-jost tracking-tight lg:leading-9">
        {text}
      </p>
    </div>
  );
};

export default Experience;
