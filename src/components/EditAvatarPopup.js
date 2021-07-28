import React from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

    const avatarRef = React.useRef();

    function handleAvatarChange(e) {
        let link = avatarRef.current.value;
        link = e.target.value;
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.onUpdateAvatar(avatarRef.current.value)
    }

    return (
        <PopupWithForm name="edit-avatar" title="Change Profile Picture" buttonText="Save" 
        isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <input type="url" placeholder="Avatar link" id="avatar-link" ref={avatarRef} onChange={handleAvatarChange}
                className="edit-box__text edit-box__text_type_descriptor" name="link" required />
            <span className="edit-box__text-error edit-box__text-error_type_url" id="avatar-link-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;