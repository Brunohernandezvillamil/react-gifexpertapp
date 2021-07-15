//usé snippet rafc para crear esto
import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai', 'Dragon Ball']);

//    const handleAdd = () => {
//        setCategories( [...categories,'HunterXHunter']);
//    }

    return (
        <>
            
            <h1>GifExpertApp</h1>
            

            <AddCategory />
            <hr/>
            <ol>
                
                {
                    categories.map( category => {
                        return <li key={category}>{category}</li>
                    })
                }

            </ol>

        </>
    )
}
