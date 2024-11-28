import { useState, useRef, useEffect } from "react";
import "./style.css";
//bgImg is the background image
//fgImg is the foreground image that will change in width
//HEIGHT AND WIDTH are the dimensions of the image file in pixels. They have to be exact and accurate.
type SliderType = {
  bgImg: string;
  fgImg: string;
  HEIGHT?: number;
  WIDTH?: number;
};
const Slider = (props: SliderType) => {
  const { bgImg, fgImg, HEIGHT = 300, WIDTH = 300 } = props;
  const wrapperStyle = `absolute inset-0 mx-auto overflow-x-hidden bg-no-repeat`;
  const [width, setWidth] = useState<number>(WIDTH / 2);
  const afterRef = useRef<any>(null);
  const handleChange = (e: any) => {
    setWidth(e?.target.value);
    if (afterRef.current) {
      afterRef.current.style.width = `${e.target.value}px`;
    }
  };

  useEffect(() => {}, [afterRef.current]);

  return (
    <div
      className="relative w-fit mx-auto overflow-hidden my-10"
      style={{ height: `${HEIGHT}px`, width: `${WIDTH}px` }}
    >
      <div
        className="absolute z-[1] left-[50%] translate-x-[-50%]"
        style={{
          width: `${WIDTH}px`,
          height: `${HEIGHT}px`,
        }}
      >
        <img
          src={bgImg}
          alt="background image"
          style={{ width: `${WIDTH}px`, height: `${HEIGHT}px` }}
          className="object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div
        className="absolute z-[2] inset-0 inset-0 overflow-hidden bg-no-repeat bg-cover"
        style={{
          width: `${width}px`,
          height: `${HEIGHT}px`,
          backgroundImage: `url('${fgImg}')`,
        }}
      >
        <div className="absolute right-0 border-r-solid border-r-white border-r-[3px] left-auto h-screen"></div>
      </div>
      <input
        type="range"
        min={1}
        max={WIDTH}
        value={width}
        onChange={handleChange as any}
        className="absolute left-[-20px] top-[50%] my-auto !z-[3] range-slider"
        style={{
          width: `${WIDTH + 40}px`,
          height: "0px",
        }}
        name="slider"
        id="slider"
      />
    </div>
  );
};

export default Slider;
