import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    // const categories = ['One Punch', 'Samurai X', 'Drago Ball' ];
    const [categories, setcategories] = useState([ 'Dragon Ball' ]);  

    // const handleAdd = () => {
    //     // categories.push('HunterXHunter');
    //     // console.log(categories);
    //     // setcategories( ['HunterXHunter', ...categories ] );
    //     setcategories( cats => [...cats, 'HunterXHunter'] );
    // }
    
    return (
        <>

        <h2>GifExpertApp</h2>
        <AddCategory setCategories = { setcategories }/>
        <hr />

        {/* <button onClick = { handleAdd } >Agregar</button> */}

        {/* {
            categories
        } */}
        <ol>
            {   /* <li> One </li>
                <li> Samurai</li>
                <li>Dragon</li> */
                categories.map( category =>(
                    <GifGrid 
                        key = {category}
                        category = { category } 
                    />
                ))  
                //    <li key={ category }> {category } </li>
                // return <li> { idx + 1 } Hola Yojan </li>  
            }
        </ol>

        </>
    );
}
