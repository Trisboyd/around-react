import React from 'react';

function PopupWithImage() {
    return (
        <section className="popup popup_image">
            <div className="popup-image-container">
                <button className="popup__exit popup__exit_image" type="button" aria-label="exit"></button>
                <img className="popup-image-container__pic" src="<%=require('./images/clipping_picture.png')%>" alt="landscape" />
                <p className="popup-image-container__title"></p>
            </div>
        </section>
    )
}

export default PopupWithImage;