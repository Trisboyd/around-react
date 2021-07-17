import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    return (
        <PopupWithForm name="add-place" title="New Place" buttonText="Create" isOpen={props.isOpen} onClose={props.onClose}>
            <input type="text" placeholder="Title" id="place-title" value=""
                className="edit-box__text edit-box__text_type_name" name="name" minLength="1" maxLength="30" required />
            <span className="edit-box__text-error edit-box__text-error_type_place-title" id="place-title-error"></span>
            <input type="url" placeholder="Image link" id="image-link" value=""
                className="edit-box__text edit-box__text_type_descriptor" name="link" required />
            <span className="edit-box__text-error edit-box__text-error_type_url" id="image-link-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;