import React from 'react';

const Card = (props) => {
    return (
        <article className="place" key={props.id}>
            <button className="place__trash" type="button" aria-label="trash-button"></button>
            <img className="place__image" src={props.link} alt={props.name} />
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