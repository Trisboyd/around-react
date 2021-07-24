import React from 'react';
import editAvatarButton from '../images/edit-avatar-button.png';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {

    const userInfo = React.useContext(CurrentUserContext);

    return (
        <main>
            <section className="profile">
                <div className="profile__image-container" onClick={props.onEditAvatarClick}>
                    <img className="profile__pic" src={userInfo.avatar} alt="profile-image" />
                    <img className="profile__pic-edit" src={editAvatarButton} alt="edit-avatar-button" />
                </div>
                <div className="profile__text">
                    <div className="profile__top-row">
                        <h1 className="profile__name">{userInfo.name}</h1>
                        <button className="profile__edit-button" type="button" aria-label="edit-profile" onClick={props.onEditProfileClick}></button>
                    </div>
                    <p className="profile__descriptor">{userInfo.about}</p>
                </div>
                <button className="profile__add-place-button" type="button" aria-label="add-place" onClick={props.onAddPlaceClick}></button>
            </section>
            <section className="places">
            {
                userInfo.cards &&
                    userInfo.cards.map(card => {
                        return (
                        <Card key={card._id} card={card} name={card.name} link={card.link} id={card._id} likes={card.likes.length} 
                        onCardClick={props.onCardClick} deleteClick={props.deleteClick}
                        cardOwner={card.owner._id} currentUser={userInfo.id}/>
                        )}
                    )
                }
        </section>
        </main>
    );
}

export default Main;