import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
    return (
        <PopupWithForm name="edit-profile" title="Edit Profile" buttonText="Save" 
        isOpen={props.isOpen} onClose={props.onClose}>
            <input type="text" value="Francisco Coronado" id="profile-name"
                className="edit-box__text edit-box__text_type_name" name="name" minLength="2" maxLength="40" required />
            <span className="edit-box__text-error edit-box__text-error_type_name" id="profile-name-error"></span>
            <input type="text" value="Conquistador" id="profile-descriptor"
                className="edit-box__text edit-box__text_type_descriptor" name="descriptor" minLength="2"
                maxLength="200" required />
            <span className="edit-box__text-error edit-box__text-error_type_descriptor"
                id="profile-descriptor-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;