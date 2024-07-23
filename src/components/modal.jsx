import {useState} from 'react'
import Modal from 'react-modal'
import '../style.css'
import './modal.css'

function ModalWindow({user}) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    }; 


    return (
        <th>

            <button onClick={openModal}>More info</button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <div className='menu'>
            
                <ul>
                    <li><h3>ID: {user.id}</h3></li>
                    <li><img className='imguser' src={user.image} /></li>
                    <li><h3>FirstName: {user.firstName}</h3></li>
                    <li><h3>LastName: {user.lastName}</h3></li>
                    <li><h3>MaidenName: {user.maidenName}</h3></li>
                </ul>
                    
                <ul>
                    <li><h3>email: {user.email}</h3></li>
                    <li><h3>phone: {user.phone}</h3></li>
                    <li><h3>username: {user.username}</h3></li>
                    <li><h3>password: {user.password}</h3></li>
                </ul>
 
                <ul>
                    <li><h3>age: {user.age}</h3></li>
                    <li><h3>gender: {user.gender}</h3></li>
                    <li><h3>birthdate: {user.birthDate}</h3></li>
                </ul>
                    
                <div className='btnw'>
                    <button onClick={closeModal}>Закрыть</button>
                </div>
            </div>
            </Modal>

        </th>

                      
    )
}

export default ModalWindow