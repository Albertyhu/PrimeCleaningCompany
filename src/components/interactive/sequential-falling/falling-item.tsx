import {useEffect, useRef} from 'react';
import '../animation.css'; 

const FallItem = (props) =>{
    const {
        image,
        customStyle, 
        altText,
        index,  
    } = props; 
    const itemRef = useRef(null)
    var timeID : any = useRef(null);
    useEffect(() => {
        if (itemRef.current) {
            timeID.current = setTimeout(() => {
                itemRef.current.classList.remove("RiseFadeOut")
            }, 200 + index * 200)
        }
        return () => {
            clearTimeout(timeID.current)
            if (itemRef.current) {
                itemRef.current.classList.add("RiseFadeOut")
            }
        }
    }, [itemRef.current])

    return(
         <div
             className='transition-all duration-[500ms] RiseFadeOut relative my-10 md:my-1 m-auto w-[100px] h-fit justify-center'
             ref={itemRef}
         >
            <img
                src={image}
                alt={altText ? altText : "icon"}
                className={`${customStyle} w-full h-full object-fit m-auto`}
                
             />
         </div>

    )

}

export default FallItem; 