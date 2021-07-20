import React from 'react';
import Places from './Places';


// function Card({ id, link, name, likes }) {

function Card({ cards }) {

    return (
        <Places>
                {
                    cards.map(card => {
                        <article className="place" key={card._id}>
                            <button className="place__trash" type="button" aria-label="trash-button"></button>
                            <img className="place__image" src={card.link} alt={card.name} />
                            <div className="place__info">
                                <h2 className="place__name">{card.name}</h2>
                                <div className="place__info_like-column">
                                    <button className="place__button place__button_type_unfilled" type="button"
                                        aria-label="like-button"></button>
                                    <p className="place__like-count">{card.likes}</p>
                                </div>
                            </div>
                        </article>
                    })
                }
        </Places>
    )
}

export default Card;