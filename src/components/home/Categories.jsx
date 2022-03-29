import React from 'react'
import {CategoriesData} from '../../data';
import CategoriesItems from './CategoriesItems'

const Categories = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-center p-6">
                {
                    CategoriesData.map((item) => {
                        return(<>
                            <CategoriesItems key={item.id} item={item} />
                        </>)
                    })
                }
            </div>
        </>
    )
}

export default Categories
