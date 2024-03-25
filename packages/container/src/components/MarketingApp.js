import {mount } from 'marketing/MarketingApp';

import React, {useEffect, useRef} from 'react';


export default() =>{
    const ref = useRef(null);
    console.log("ref 2", ref)
    useEffect(() =>{
        mount(ref.current)
    },[])
    return <dev ref={ref}/>
}