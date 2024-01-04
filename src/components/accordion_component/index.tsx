import { useState } from 'react';
import type { AccordionType } from '@/utils/interface';
import "./style.css"; 
import AccordionItem from './accordionItem.tsx'; 

const AccordionComponent = (props: {data: Array<AccordionType>}) =>{
    const { data } = props;
    const [current, setCurrent] = useState<number>(0)

    return(
            <div>
                {data && data.length > 0 &&
                    data.map((item, index: number) =>
                        <AccordionItem 
                            title = {item.question}
                            content = {item.ans}
                            index = {index}
                            key = {`${index}-${item.question}`}
                            current = {current}
                            setCurrent = {setCurrent}
                        />)
                }
            </div>
    )
}

export default AccordionComponent; 