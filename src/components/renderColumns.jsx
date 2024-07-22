import React, { useState, useEffect } from 'react';
import SearchUsers from './searchUsers';
import '../style.css'


const RenderColumns = () => {

  const url = 'https://dummyjson.com/users?limit=300'

  const [search, setSearch] = useState('') // Состояние в input-компоненте
  const [users, setUsers] = useState([]); // Состояние списка пользователей
  const [loading, setLoading] = useState(true); // Состояние загрузки

  useEffect(() => {
        const fetchData = async () => {

            const response = await fetch(url);
            // Обработка ошибки
            if (!response.ok) { 
                throw new Error('Oшибка в api: ' + url); 
            }
            const data = await response.json();
            setUsers(data.users); // Вытаскиваем из объекта список users
            setLoading(false); // Загрузка завершена
        };

        fetchData();
    }, []);

  if (loading) return <div>Загрузка...</div>;

  function HandleFilterChange(event) { // Меняем состояние поисковой строки
    setSearch(event.target.value)
  }



  return (
    <>
      <header>
          <h1>Тестовое задание JS</h1>
      </header>
      <div className='table'>
        <form>
            <p>
                <input type="text" className='searchForm' placeholder='Найти пользователя' value={search} onChange={HandleFilterChange}/>
            </p>
        </form>
        {/* Отправляем текущий список пользователей и запрос на обработку */}
        <SearchUsers search={search} users={users}/> 
      
      </div>
    </>
  );
};

export default RenderColumns;