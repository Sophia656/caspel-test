import React from 'react';
import style from './TableItem.module.css'

const TableItem = ({item}) => {

    return (
        <div className={style.wrapper}>
            <div>
                <div className={style.item}>{item.address}</div>
                <div className={style.item}>{item.email}</div>
            </div>
            <div>
                <div className={style.item}>{item.name}</div>
                <div className={style.item}>{item.phone}</div>
            </div>
        </div>
    );
};

export default TableItem;