import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {


    // const [Count, setCount] = useState(0);


    // Aplicación del custom Hook...
    const { data: images, loading } = useFetchGifs( category );



    // console.log(loading);

    // const [images, setImages] = useState([]);

    // useEffect( () => {
    //     getGifs( category )
    //         .then( gifs => setImages( gifs ))
    // }, [ category ])

    // getGifs();

    return (
        //Fragment corto <> </>
        <>
            <h3 className= 'animate__animated animate__fadeIn'> { category } </h3>

            { loading && <p className='animate__animated animate__flash' > Loading </p> }

            <div className="card-grid">

                {
                     images.map( img => (

                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                        
                    ))
                }
               
            </div>

        </>
            
            // {/* <h3> { Count } </h3>
            // <button onClick = { ()=> setCount (Count + 1)}> Incrementa el Count en 1 </button> */} 

            // {/* <li> Item </li> */}
            // {
            //     // images.map( img => (
            //         //     <li key={ img.id }> { img.title } </li>
            //         // ))
            //         // images.map( ({ id , title }) => (
            //         //     // <li key={ id }> { title } </li>
            //         // ))
                    
            // }
                     
    )
}
