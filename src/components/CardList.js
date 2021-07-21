import React from 'react';
import Places from './Places';
import Card from './Card';

const CardList = ( props ) => {

    return (
        <Places>
                {
                    props.cards.map(card => (
                        <Card name={card.name} link={card.link} id={card._id} likes={card.likes.length} />





                            // <article className="place" key={card._id}>
                            //     <button className="place__trash" type="button" aria-label="trash-button"></button>
                            //     <img className="place__image" src={card.link} alt={card.name} />
                            //     <div className="place__info">
                            //         <h2 className="place__name">{card.name}</h2>
                            //         <div className="place__info_like-column">
                            //             <button className="place__button place__button_type_unfilled" type="button"
                            //                 aria-label="like-button"></button>
                            //             <p className="place__like-count">{card.likes.length}</p>
                            //         </div>
                            //     </div>
                            // </article>
                        )
                    )
                }
        </Places>
    )
}

export default CardList;