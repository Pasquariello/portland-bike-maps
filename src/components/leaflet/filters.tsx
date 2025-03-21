/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { CLASS_FOUR, CLASS_ONE, CLASS_THREE, CLASS_TWO } from "@/constants";
import { open_sans } from "@/ui/fonts";
import { useState } from "react";

const Filters = ({data, handleFilter}: any) => {
   
    const [activeClassFilter, setActiveClassFilter] = useState<string[]>([]);

    const filters = [
        {
          color: CLASS_ONE,
          value: 'CLASS_ONE',
          title: 'Class 1'
        },
        {
          color: CLASS_TWO,
          value: 'CLASS_TWO',
          title: 'Class 2'
        },
        {
          color: CLASS_THREE,
          value: 'CLASS_THREE',
          title: 'Class 3'
        },
        {
          color: CLASS_FOUR,
          value: 'CLASS_FOUR',
          title: 'Class 4'
        },
      ]

    const handleOnClick = (type: string) => {

        const newArray = activeClassFilter.includes(type) 
          ? activeClassFilter.filter(activeClassFilterType => activeClassFilterType !== type) 
          : [...activeClassFilter, type]
    
      
        setActiveClassFilter(newArray);
    
          const options = {
            ABL: 'CLASS_TWO',
            BBBL: 'CLASS_TWO',
            BL: 'CLASS_TWO',
            BBL: 'CLASS_TWO',
            ESR: 'CLASS_THREE',
            LSB: 'CLASS_THREE',
            NG: 'CLASS_ONE',
            PBL: 'CLASS_FOUR',
            SBBL: 'CLASS_TWO',
            SIR: 'CLASS_FOUR',
            TRL: 'CLASS_ONE',
        }
     
        const filteredData = data?.features?.filter((data: { properties: { Facility: string; }; }) => newArray.includes(options[data?.properties?.Facility as keyof typeof options]));
    
        if (!newArray.length) { 
          handleFilter(data);
        } 
        else {
            handleFilter({
                ...data,
                features: filteredData
            });
        }
    }

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            <div style={{display: 'flex', gap: 20, marginBottom: 20, flexWrap: 'wrap'}}>
                {filters.map(filter => {
                    return (
                    <div 
                        key={filter.title} 
                        onClick={() => handleOnClick(filter.value)}
                        className={`${open_sans.className}`} style={{
                        border: activeClassFilter.includes(filter.value) ? '2px solid black': '2px solid transparent',  
        
                        cursor: 'pointer', padding: '8px 24px', color: 'white', background: filter.color, display: 'inline-block', borderRadius: 44}}
                    >
                        {filter.title}
                    </div>
                    )
                })}
            </div>
            <p 
                style={{color: '#3862ae', cursor: 'pointer'}}
                onClick={() => {
                    if (data) {
                        handleFilter(data)
                    }
                    setActiveClassFilter([]);
                }}
            >
                Reset
            </p>
        </div>
    )
}

export default Filters;