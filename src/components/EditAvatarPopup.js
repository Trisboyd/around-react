import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    return (
        <PopupWithForm name="edit-avatar" title="Change Profile Picture" buttonText="Save" 
        isOpen={props.isOpen} onClose={props.onClose}>
            <input type="url" placeholder="Avatar link" id="avatar-link" value=""
                className="edit-box__text edit-box__text_type_descriptor" name="link" required />
            <span className="edit-box__text-error edit-box__text-error_type_url" id="avatar-link-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;