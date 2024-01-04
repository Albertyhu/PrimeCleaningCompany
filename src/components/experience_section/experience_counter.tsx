import CountUp from "./counter"; 
const Experience = ({
  text = "Default Text",
  num,
  i,
  icon, 
}: {
  text: string;
  num: number;
  i: number;
  icon: any; 
}) => {
  const iconSize = 50; 
  return (
    <div
      className={`flex min-w-[243px] flex-col z-[2] ${
        i === 2 ? "" : "lg:border-r"
      } lg:border-primary-100 items-center justify-center gap-4`}
    >
      <h5 className=" text-[50px] lg:text-[85px] tracking-widest leading-[70px] font-dm lg:leading-[106.25px] ">
        <CountUp 
          number = {num}
        />
      </h5>
      <p className="text-black text-base text-center lg:text-lg font-jost tracking-tight lg:leading-9">
        {text}
      </p>
      {icon && 
      <div
        style = {{width: `${iconSize}px`, height: `${iconSize}px`}}
      >
        <img
          src = {icon.src}
          className = "object-fit w-full h-full" 
          alt = {text}
        />
      </div>
      }
    </div>
  );
};

export default Experience;
