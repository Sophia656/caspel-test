import React, { useEffect, useMemo, useState } from 'react';
import { getCurrentData } from '../../utils/pages';
import TableItem from '../tableItem/TableItem';
import Pagination from '../UI/pagination/Pagination';
import Titels from '../UI/titles/Titels';
import style from './Table.module.css';

const Table = ({data, setData, currentData, page, setCurrentData, limit, totalPages, setPage}) => {
    const [byName, setByName] = useState(false)
    const [byEmail, setByEmail] = useState(false)
    const [byPhone, setByPhone] = useState(false)
    const [byAddress, setByAddress] = useState(false)

    const getArr = useMemo(() => getCurrentData(page, data, limit), [page, limit, byName, byEmail, byPhone, byAddress, data])

    useEffect(() => {
        setCurrentData(getArr)
    }, [page, byName, byEmail, byPhone, byAddress, data, limit])

    useEffect(() => {
        if (byName) {
            setData(data.sort((a, b) => {
                return a.name.localeCompare(b.name)
             }))
            return setByName(false);   
        } else 
        if (byEmail) {
            setData(data.sort((a, b) => {
                return a.email.localeCompare(b.email)
             }))
            return setByEmail(false);   
        } else
        if (byPhone) {
            setData(data.sort((a, b) => {
                return a.phone.replace(/[^0-9]/g, '').localeCompare(b.phone.replace(/[^0-9]/g, '')) // оставляет только цифры
             }))
            return setByPhone(false); 
        } else
        if (byAddress) {
            setData(data.sort((a, b) => {
                return a.address.localeCompare(b.address)
            }))
           return setByAddress(false); 
        }
        
        return function() {
            setByAddress(false);
            setByEmail(false)
            setByName(false)
            setByPhone(false);
        }
    }, [byName, byEmail, byPhone, byAddress])

 return (
        <div className={style.wrapper}>
            <Titels
            setByAddress={setByAddress}
            setByEmail={setByEmail}
            setByName={setByName}
            setByPhone={setByPhone}
            />
            {currentData.map(i =>
                <TableItem key={i.guid} item={i} />
            )}
            {currentData.length === 0 && <h2 className={style.notfound}>Contact's not found!</h2>}
            <Pagination totalPages={totalPages} setPage={setPage} page={page} />
        </div>
    );
            
};

export default Table;