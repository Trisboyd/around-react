import React from 'react';
import coronado from '../images/coronado.jpg';
import editAvatarButton from '../images/edit-avatar-button.png';

function AppMain() {

    function handleEditAvatarClick(){
        const avatarPopup = document.querySelector(".popup_avatar");
        avatarPopup.classList.add("popup_visible");
    }


    function handleEditProfileClick(){
        const editProfilePopup = document.querySelector(".popup_profile-edit");
        editProfilePopup.classList.add("popup_visible");
    }

    function handleAddPlaceClick(){
        const addPlacePopup = document.querySelector(".popup_add-place");
        addPlacePopup.classList.add("popup_visible");
    }


    return (
        <main>
                <section className="profile">
                    <div className="profile__image-container" onClick={handleEditAvatarClick}>
                        <img className="profile__pic" src={coronado} alt="profile image"/>
                        {/* webpack version "<%=require('./images/coronado.jpg')%>" */}
                        <img className="profile__pic-edit" src={editAvatarButton} alt="edit avatar button"/>
                    </div>
                    <div className="profile__text">
                        <div className="profile__top-row">
                            <h1 className="profile__name">Francisco Coronado</h1>
                            <button className="profile__edit-button" type="button" aria-label="edit-profile" onClick={handleEditProfileClick}></button>
                        </div>
                        <p className="profile__descriptor">Conquistador</p>
                    </div>
                    <button className="profile__add-place-button" type="button" aria-label="add-place" onClick={handleAddPlaceClick}></button>
                </section>

                <section className="places">
                </section>

            </main>
    );
}

export default AppMain;