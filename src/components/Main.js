import React from 'react';
import editAvatarButton from '../images/edit-avatar-button.png';

function AppMain(props) {

    return (
        <main>
            <section className="profile">
                <div className="profile__image-container" onClick={props.onEditAvatarClick}>
                    <img className="profile__pic" src={props.avatar} alt="profile-image" />
                    {/* webpack version "<%=require('./images/coronado.jpg')%>" */}
                    <img className="profile__pic-edit" src={editAvatarButton} alt="edit-avatar-button" />
                </div>
                <div className="profile__text">
                    <div className="profile__top-row">
                        <h1 className="profile__name">{props.name}</h1>
                        <button className="profile__edit-button" type="button" aria-label="edit-profile" onClick={props.onEditProfileClick}></button>
                    </div>
                    <p className="profile__descriptor">{props.description}</p>
                </div>
                <button className="profile__add-place-button" type="button" aria-label="add-place" onClick={props.onAddPlaceClick}></button>
            </section>

        </main>
    );
}

export default AppMain;