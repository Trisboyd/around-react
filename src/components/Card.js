import React from 'react';

const Card = (props) => {

    function handleClick() {
        props.onCardClick(props.card);
    }

    // Checking if the current user is the owner of the current card
    const isOwn = props.cardOwner === props.currentUser;

    // Creating a variable which you'll then set in `className` for the delete button
    const placeTrashClassName = (
        `place__trash ${isOwn ? 'place__trash_visible' : 'place__trash_hidden'}`
    );

    return (
        <article className="place">
            <button className={placeTrashClassName} type="button" aria-label="trash-button" onClick={props.deleteClick}></button>
            <img className="place__image" src={props.link} alt={props.name} onClick={handleClick} />
            <div className="place__info">
                <h2 className="place__name">{props.name}</h2>
                <div className="place__info_like-column">
                    <button className="place__button place__button_type_unfilled" type="button"
                        aria-label="like-button"></button>
                    <p className="place__like-count">{props.likes}</p>
                </div>
            </div>
        </article>
    )
}

export default Card;