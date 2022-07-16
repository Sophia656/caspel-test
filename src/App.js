import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './components/table/Table';
import SearchEnigne from './components/UI/searchEngine/SearchEnigne';
import { getPageCount, pagination } from './utils/pages';
const db = require('./api/gererated.json')

function App() {
  const [data, setData] = useState(db)
  const [searchQuery, setSearchQuery] = useState('')
  const [totalPages, setTotalPages] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const totalItems = data.length

  useEffect(() => {
    const count = getPageCount(totalItems, limit)
    setTotalPages(pagination(count))
  }, [data, limit])

  useEffect(() => {
    const newData = [];
    // убираем guid для удобства фильтрации
    if (searchQuery) {
      db.map(item => {
        for (let key in item) {
          if (String(key) !== 'guid' &&
          item[key].toLowerCase().includes(searchQuery.toLowerCase())
          ) {
            newData.push(item)
          }
        }
      })
      // убираем дубликаты и обновляем стейт
      const i = {}
      setData(newData.filter(({name}) =>(!i[name] && (i[name] = 1))))
    } else {
      setData(db)
    }

  }, [searchQuery])

  // на случай, если мы находимся на странице, которой при изменении лимита может и не быть
  useEffect(() => {
    if (limit !== 10) {
      setPage(1)
    }
  }, [limit])
  
  return (
    <div className="App">
      <SearchEnigne 
      searchQuery={searchQuery} 
      setSearchQuery={setSearchQuery} 
      setLimit={setLimit} 
      />
      <Table 
      data={data} 
      setData={setData} 
      currentData={currentData} 
      page={page} 
      setCurrentData={setCurrentData} 
      limit={limit} 
      setLimit={setLimit} 
      totalPages={totalPages} 
      setPage={setPage} 
      />
    </div>
  );
}

export default App;