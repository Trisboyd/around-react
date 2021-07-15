import React from 'react';

// popup_edit-profile
// popup_add-place
// popup_edit-avatar

function PopupWithForm(props) {
    return (
        <section className={`popup popup_${props.name}`}>
            <div className="popup__container">
                <button className={`popup__exit popup__exit_${props.name}`} type="button" aria-label="exit"></button>
                <form className={`edit-box edit-box_type_${props.name}`} name="edit-box" noValidate>
                    <h3 className="edit-box__title">{props.title}</h3>
                    {props.children}
                    <button type="submit" id={props.name} className="edit-box__submit" name="edit-box-submit"
                        aria-label="submit" value="Save">{props.buttonText}</button>
                </form>
            </div>
        </section>
    )
}

export default PopupWithForm;

{/* <input type="text" value="Francisco Coronado" id="profile-name"
                            className="edit-box__text edit-box__text_type_name" name="name" minLength="2" maxLength="40" required />
                        <span className="edit-box__text-error edit-box__text-error_type_name" id="profile-name-error"></span>
                        <input type="text" value="Conquistador" id="profile-descriptor"
                            className="edit-box__text edit-box__text_type_descriptor" name="descriptor" minLength="2"
                            maxLength="200" required />
                        <span className="edit-box__text-error edit-box__text-error_type_descriptor"
                            id="profile-descriptor-error"></span> */}