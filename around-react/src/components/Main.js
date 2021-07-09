import React from 'react';
import coronado from '../images/coronado.jpg';
import editAvatarButton from '../images/edit-avatar-button.png';

function AppMain() {
    return (
        <main>
                <section className="profile">
                    <div className="profile__image-container">
                        <img className="profile__pic" src={coronado} alt="profile image" />
                        {/* webpack version "<%=require('./images/coronado.jpg')%>" */}
                        <img className="profile__pic-edit" src={editAvatarButton} alt="edit avatar button" />
                    </div>
                    <div className="profile__text">
                        <div className="profile__top-row">
                            <h1 className="profile__name">Francisco Coronado</h1>
                            <button className="profile__edit-button" type="button" aria-label="edit-profile"></button>
                        </div>
                        <p className="profile__descriptor">Conquistador</p>
                    </div>
                    <button className="profile__add-place-button" type="button" aria-label="add-place"></button>
                </section>

                <section className="places">
                </section>

            </main>
    );
}

export default AppMain;