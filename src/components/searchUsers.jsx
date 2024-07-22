import Table from "./Table";

function SearchUsers({search, users}) {

    const ArrUsers = users
    const NewUsers = ArrUsers.map(user => {
      if (search === ''){
        return user;
      }
      if ( // Ищем данные
        user.firstName.includes(search) ||
        user.lastName.includes(search) ||
        user.maidenName.includes(search) ||
        user.age === +search ||
        user.gender.includes(search) ||
        user.address.address.includes(search) ||
        user.address.city.includes(search)
      ) {
        return user;
      }
      return null;
    })
    .filter(user => user !== null);
    
   
    return (
      <Table NewUsers={NewUsers}/> // Отправляем фильтрованные данные на рендер
    )
}

export default SearchUsers