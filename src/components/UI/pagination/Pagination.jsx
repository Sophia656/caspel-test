import React, { useEffect, useState } from 'react';
import style from './Pagination.module.css';

const Pagination = ({totalPages, setPage, page}) => {
    const [visibleBtns, setVisibleBtns] = useState([])
    const [showPrevBtns, setShowPrevBtns] = useState(false)
    const [showNextBtns, setShowNextBtns] = useState(false)
    
    const defaultBtns = [];
    useEffect(() => {
        for (let i = 1; i <= totalPages.length - 1 && i < 11; i++) {
            defaultBtns.push(i)
        }
        setVisibleBtns(defaultBtns)
    }, [totalPages])

    useEffect(() => {
        if (showPrevBtns) {
            const currentBtns = [];
            if (visibleBtns[0] > 1) {
                for (let i = visibleBtns[1] - 1; i < visibleBtns[1] + 9; i++) {
                    currentBtns.push(i - 1)
                }
                setVisibleBtns(currentBtns)
            } else if (currentBtns[0] <= 1) {
                setVisibleBtns(defaultBtns)
            }
        }

        if (showNextBtns) {
            const currentBtns = [];
            if (visibleBtns[visibleBtns.length - 1] <= totalPages[totalPages.length - 2]) {
                for (let i = visibleBtns[1]; i < visibleBtns[1] + 10; i++) {
                    currentBtns.push(i)
                }
                setVisibleBtns(currentBtns)
            } else if (currentBtns[currentBtns.length] > totalPages[totalPages.length - 2]){
                setVisibleBtns(defaultBtns)
            }
        }

        return function() {
            setShowPrevBtns(false)
            setShowNextBtns(false) 
        }
    }, [showPrevBtns, showNextBtns, totalPages])

    return (
        <div className={style.wrapper}>
            {totalPages.length > 10 && 
                <button onClick={() => setShowPrevBtns(true)} className={style.btn}>{'<'}</button>
            }
            {visibleBtns.map(i =>
                <button className={style.btn} style={{background: page === i ? 'gray' : 'lightgray'}} key={i} onClick={() => setPage(i)}>{i}</button>
            )}
            {totalPages.length > 10 && 
                <button onClick={() => setShowNextBtns(true)} className={style.btn}>{'>'}</button>
            }
        </div>
    );
};

export default Pagination;