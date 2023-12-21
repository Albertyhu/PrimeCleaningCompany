import {useState, useRef, useContext, useEffect} from 'react'; 
import "../animation.css"; 
import FallItem from './falling-item.tsx'; 
import uuid from 'react-uuid'; 

type FallingItemType = {
    alt: string, 
    img: any, 
} 

const ItemGrid = (props : {data: Array<FallingItemType>, customGrid?: string}) =>{
    const {     
        data,
        customGrid, 
    } = props; 
    const [display, setDisplay] = useState<boolean>(false); 
    const gridRef = useRef(null)
    const options = {
		threshold: 0.1, 
	} 

    const callback = (entries) =>{
        entries.forEach((entry, index) =>{
            if(entry.isIntersecting){
                setDisplay(true)
            }
            else{
                setDisplay(false)
            }

        })
    }

    const observer = new IntersectionObserver(callback, options)
    useEffect(()=>{
        if(gridRef.current)
            observer.observe(gridRef.current)
    
    }, [gridRef.current])


    return(
    <div
        id="FallItemsGrid"
        className ="fallingItemsGridTag"
        ref = {gridRef}
    >
         {display &&
            <div
                id = "FallItemWrapper"
                className="flex flex-row flex-wrap mx-auto w-full gap-[10px] sm:gap-[20px] justify-evenly h-[300px] sm:h-[150px]"
                >
                {data.map((item: FallingItemType, index : number) => 
                    <FallItem 
                        index = {index}
                        image = {item.img}
                        altText = {item.alt}
                        key = {uuid()}
                    /> 
                    )}
            </div>
        }
    </div>       
    )

}

export default ItemGrid; 