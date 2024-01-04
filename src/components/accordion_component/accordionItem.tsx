import {useRef, useEffect} from 'react'; 
import UpArrow from "@/assets/images/up_arrow.png"; 
import "./style.css"; 

const Accordion = (props: 
    {
        title: string, 
        content: string, 
        index: number, 
        current: number, 
        setCurrent: Function 
    }) =>{
    const {
        title, 
        content, 
        index,
        current, 
        setCurrent
    } = props; 
    const ArrowRef = useRef<HTMLImageElement>(null); 
    const paraRef = useRef<HTMLDivElement>(null); 
    const toggleEvent = () =>{
        if(current && ArrowRef.current && current === index + 1){
            setCurrent(0)
        }
        else{
            setCurrent(index + 1)
        }
    }

    const Open = () =>{
        ArrowRef?.current?.classList.remove("downArrow")
        paraRef?.current?.classList.remove("collapsed"); 
    }

    const Close = () =>{
        if(ArrowRef.current && !ArrowRef?.current.classList.contains("downArrow"))
            ArrowRef?.current.classList.add("downArrow")
        if(paraRef.current && !paraRef?.current?.classList.contains("collapsed"))
            paraRef?.current?.classList.add("collapsed"); 
    }

    useEffect(()=>{
        if(current && ArrowRef.current && current === index + 1){
            Open(); 
        }
        else{
            Close();
        }
    }, [current])

    return(
        <div
            className = "box_shadow w-full font-secondary bg-white my-10 py-10"
        >
            <div    
                className = "w-11/12 mx-auto"
            >
                <div 
                    className = "flex flex-row w-full justify-between cursor-pointer"
                    onClick = {()=>{
                         toggleEvent()}}
                >
                    <h4
                        className = "font-bold"
                    >{title}</h4>
                    <img 
                        src = {UpArrow.src}
                        ref = {ArrowRef}
                        className = "w-[20px] h-[20px] arrowStyle downArrow transition-all"
                    />
                </div>
                <div
                    className = "collapsibleDiv collapsed overflow-hidden"
                    ref={paraRef}
                >
                    <p
                        className = "mt-5 font-light"
                    >{content}</p>
                </div>
            </div>  
        </div>
    )
}

export default Accordion; 