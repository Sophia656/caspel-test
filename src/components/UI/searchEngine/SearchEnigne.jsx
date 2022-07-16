import React, { useEffect, useState } from 'react';
import style from './SearchEnigne.module.css';

const SearchEnigne = ({searchQuery, setSearchQuery, setLimit}) => {
    const [paginationQuery, setPaginationQuery] = useState('')

    useEffect(() => {
        if (paginationQuery.length > 0) {
            setLimit(paginationQuery)
        } else {
            setLimit(10)
        }
    }, [paginationQuery])

    return (
        <div className={style.wrapper}>
            <input 
            className={style.input} 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            type="text" 
            placeholder='Search...' 
            />
            <input 
            className={style.input} 
            type="number" 
            value={paginationQuery} 
            onChange={e => setPaginationQuery(e.target.value)} 
            placeholder='enter a number to change the number of paginated output' 
            />
        </div>
    );
};

export default SearchEnigne;