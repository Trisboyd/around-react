import React from 'react';
import Header from './Header';
import Main from './Main';
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmDeletePopup from './ConfirmDeletePopup';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import '../index.css';


function App() {

    // Retrieve User info in object______________________________________________________________________________________
    const [currentUser, setCurrentUser] = React.useState({
        name: '',
        about: '',
        avatar: '',
        id: ''
    });

    const retrieveUserInfo = () => {
        api.getProfile().then(res => {
            setUserInfo(res);
            setAvatar(res.avatar);
        })
        .catch(err => {console.log(err)})
    }

    const setAvatar = (link) => {
        setCurrentUser((prevCurrentUser) => ({
            ...prevCurrentUser,
            avatar: link
        }));
    }

    const setUserInfo= (data) => {
        setCurrentUser((prevCurrentUser) => ({
            ...prevCurrentUser,
            name: data.name,
            about: data.about,
            id: data._id,
        }));
    }

    React.useEffect(() => {
        retrieveUserInfo();
    }, []);


    // Hooks for Popups
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState();


    // Popup functions for opening and closing
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleConfirmDeleteClick() {
        setIsConfirmDeletePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsConfirmDeletePopupOpen(false);
        setSelectedCard();
    }

    function handleUpdateUser(data) {
        api.changeProfile(data).then(res => {
            setUserInfo(data);
            closeAllPopups();
        })
        .catch(err => {console.log(err)})
    }

    function handleUpdateAvatar(data) {
        api.changeAvatar(data).then(res => {
            setAvatar(data);
            closeAllPopups();
        })
        .catch(err => {console.log(err)})
    }


    // Components
    return (

        <div>
            <CurrentUserContext.Provider value={currentUser}>
            <Header />
            <Main onEditAvatarClick={handleEditAvatarClick} onEditProfileClick={handleEditProfileClick}
                onAddPlaceClick={handleAddPlaceClick} onCardClick={handleCardClick} deleteClick={handleConfirmDeleteClick} />
            <Footer />
            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
            <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            <ConfirmDeletePopup isOpen={isConfirmDeletePopupOpen} onClose={closeAllPopups} />
            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;