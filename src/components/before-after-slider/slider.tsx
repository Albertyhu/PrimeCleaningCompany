import {useState, useEffect, useRef} from 'react'; 
import "./style.css";
type SliderType = {
    bgImg: string, 
    fgImg: string,
    HEIGHT: number,
    WIDTH: number
}
const Slider = (props : SliderType) =>{
    const {
        bgImg, 
        fgImg, 
        HEIGHT,
        WIDTH
    } = props; 
    const wrapperStyle = `absolute inset-0 mx-auto overflow-x-hidden bg-no-repeat`; 
    const imageStyle = "object-cover w-full h-auto mx-auto"
    const image1 = "before:bg-[url('cleaning-before-and-after-faucet1.jpg')]"; 
    const Image2 = "bg-[url('./cleaning-before-and-after-faucet2.jpg')]"
    const [width, setWidth] = useState<number>(WIDTH/2) 
    const afterRef = useRef(null); 
    const handleChange = (e : EventTarget) =>{
        setWidth(e.target.value); 
        if(afterRef.current){
            afterRef.current.style.width = `${e.target.value}px`
        }
    }

    useEffect(()=>{
        if(afterRef.current){
            //setWidth(250)
        }
    },[afterRef.current])

    return(
        <>
            <div 
                className={`z-2 ${wrapperStyle} `}
                style={{height:`${HEIGHT}px`, width: `${WIDTH}px`, backgroundImage: `url(${bgImg})`}}
                >

            </div>
            <div 
                className={` z-1 ${wrapperStyle}`}
                style={{height:`${HEIGHT}px`, width: `${WIDTH}px`}}
            >
                <div
                    className = {`relative h-full w-[250px] overflow-hidden`}
                    ref = {afterRef}
                >
                    <div
                        className = "absolute inset-0 bg-no-repeat"
                        style = {{backgroundImage: `url(${fgImg})`}}
                    ></div>
                </div>
            </div>
            <input 
                type="range" 
                min={1}
                max={WIDTH} 
                value={width}
                onChange= {handleChange}
                className="relative block mx-auto top-[50%] translate-y-[-50%] my-auto"  
                style = {{width: `${WIDTH}px`}}
                name='slider'
                id="slider" 
              />
            <div className='slider-button'></div>
        </>
    ) 
}

export default Slider; 