import React from 'react';
import editAvatarButton from '../images/edit-avatar-button.png';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

    // User info imported by context
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main>
            <section className="profile">
                <div className="profile__image-container" onClick={props.onEditAvatarClick}>
                    <img className="profile__pic" src={currentUser.avatar} alt="profile-image" />
                    <img className="profile__pic-edit" src={editAvatarButton} alt="edit-avatar-button" />
                </div>
                <div className="profile__text">
                    <div className="profile__top-row">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button className="profile__edit-button" type="button" aria-label="edit-profile" onClick={props.onEditProfileClick}></button>
                    </div>
                    <p className="profile__descriptor">{currentUser.about}</p>
                </div>
                <button className="profile__add-place-button" type="button" aria-label="add-place" onClick={props.onAddPlaceClick}></button>
            </section>
            <section className="places">
                {
                    props.cards.map(card => {
                        return (
                            <Card key={card._id} card={card} name={card.name} link={card.link} id={card._id}
                                likes={card.likes.length} onCardClick={props.onCardClick} cardOwner={card.owner._id} 
                                onCardLike={props.handleCardLike} onCardDelete={props.handleCardDelete}/>
                        )
                    }
                    )
                }
            </section>
        </main>
    );
}

export default Main;

    // // Cards state variable
    // const [cards, setCards] = React.useState([]);

    // // function that fetches cards
    // function addCards() {
    //     api.getCardList().then(res => {
    //         setCards([...cards, ...res]);
    //     })
    //         .catch(err => { console.log(err) })
    // }

    // // call cards and profile using hook's "useEffect"
    // React.useEffect(() => {
    //     addCards();
    // }, []);

    // // function for sending card likes or unlikes to API and resetting the status accordingly
    // function handleCardLike(card) {

    //     const isLiked = card.likes.some(cardLike => cardLike._id === currentUser.id);

    //     api.changeLikeCardStatus(card._id, isLiked).then((likedCard) => {
    //         setCards(cards.map((cardItem) => cardItem._id === card._id ? likedCard : cardItem));
    //     })
    //         .catch(err => { console.log(err) });
    // }


    // // function for deleting a card
    // function handleCardDelete(card) {

    //     api.deleteCard(card._id).then(res => {
    //         setCards(cards.filter((cardItem) => cardItem._id !== card._id))
    //     }) 
    // }