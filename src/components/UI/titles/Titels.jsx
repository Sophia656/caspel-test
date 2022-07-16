import React from 'react';
import style from './Titles.module.css';

const Titels = ({setByAddress, setByEmail, setByName, setByPhone}) => {
    return (
        <div className={style.wrapper}>
            <div>
                <h2 className={style.title} onClick={() => setByAddress(true)}>ADDRESS</h2>
                <h2 className={style.title} onClick={() => setByEmail(true)}>EMAIL</h2>
            </div>
            <div>
                <h2 className={style.title} onClick={() => setByName(true)}>NAME</h2>
                <h2 className={style.title} onClick={() => setByPhone(true)}>PHONE</h2>
            </div>
        </div>
    );
};

export default Titels;