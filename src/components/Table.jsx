'../style.css'
import ModalWindow from './modal'

function Table({ NewUsers }) {


    // Вывод колонок
    return (
        <table className='Table'>
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">FirstName</th>
                    <th scope="col">lastName</th>
                    <th scope="col">maidenName</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Street</th>
                    <th scope="col">City</th>
                </tr>
            </thead>

            <tbody>
                {NewUsers.map((user) => {
                    return (
                        <tr>

                            <th scope="row">{user.id}</th>
                            <th>{user.firstName}</th>
                            <th>{user.lastName}</th>
                            <th>{user.maidenName}</th>
                            <th>{user.age}</th>
                            <th>{user.gender}</th>
                            <th>{user.phone}</th>
                            <th>{user.address.address}</th>
                            <th>{user.address.city} </th>
                            <ModalWindow user = {user}/>

                        </tr>
                    )
                })}


            </tbody>
           

        </table>
    )
}

export default Table