import {useState, useEffect, useRef} from 'react'; 
import "./style.css";
const Slider = (props) =>{
    const {HEIGHT} = props; 
    const wrapperStyle = `absolute inset-0 w-[300px] sm:w-[500px] mx-auto overflow-x-hidden`; 
    const imageStyle = "object-cover w-full h-auto mx-auto"
    const image1 = "before:bg-[url('cleaning-before-and-after-faucet1.jpg')]"; 
    const Image2 = "bg-[url('./cleaning-before-and-after-faucet2.jpg')]"
    const [width, setWidth] = useState<number>(window.innerWidth >= 636 ? 250 : 150) 
    const afterRef = useRef(null); 
    const handleChange = (e : EventTarget) =>{
        setWidth(e.target.value); 
        if(afterRef.current){
            afterRef.current.style.width = `${e.target.value}px`
        }
    }

    useEffect(()=>{
        if(afterRef.current){
            setWidth(250)
        }
    },[afterRef.current])

    return(
        <>
            <div 
                className={`z-2 ${wrapperStyle} bg-[url('./cleaning-before-and-after-faucet2.jpg')]`}
                style={{height:`${HEIGHT}px`}}
                >

            </div>
            <div 
                className={` z-1 ${wrapperStyle}`}
                style={{height:`${HEIGHT}px`}}
            >
                <div
                    className = {`relative h-full w-[250px] overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[url('cleaning-before-and-after-faucet1.jpg')]`}
                    ref = {afterRef}
                >
                </div>
            </div>
            <input 
                type="range" 
                min={1}
                max={500} 
                value={width}
                onChange= {handleChange}
                className="relative block w-300px sm:w-[500px] mx-auto top-[50%] translate-y-[-50%] my-auto"  
                name='slider'
                id="slider" 
              />
            <div className='slider-button'></div>
        </>
    ) 
}

export default Slider; 