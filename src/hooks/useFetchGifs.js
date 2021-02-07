import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        
        getGifs(category)
            .then( imgs => {

            // console.log(imgs);

                setstate ({
                    data: imgs,
                    loading:false
                })
            
            })


    // setTimeout( () => {
    //     setstate({
    //         data: [1,2,3,4,5,6,7],
    //         loading: true
    //     })
    // }, 3000);

    }, [category])
    
    return state; // { data: [], loading: true };

}   