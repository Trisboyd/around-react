import React from 'react';
import AppHeader from './Header';
import AppMain from '.Main';
import AppFooter from './Footer';
import './index.css';

function App() {
    return (
        <body className="page">
            <AppHeader />
            <AppMain />
            <AppFooter />

            <template id="place-template">
                <article className="place">
                    <button className="place__trash" type="button" aria-label="trash-button"></button>
                    <img className="place__image" alt="" />
                    <div className="place__info">
                        <h2 className="place__name"></h2>
                        <div className="place__info_like-column">
                            <button className="place__button place__button_type_unfilled" type="button"
                                aria-label="like-button"></button>
                            <p className="place__like-count">0</p>
                        </div>
                    </div>
                </article>
            </template>

            <section className="popup popup_profile-edit">
                <div className="popup__container">
                    <button className="popup__exit popup__exit_edit-profile" type="button" aria-label="exit"></button>
                    <form className="edit-box edit-box_profile" name="edit-box" novalidate>
                        <h3 className="edit-box__title">Edit profile</h3>
                        <input type="text" value="Francisco Coronado" id="profile-name"
                            className="edit-box__text edit-box__text_type_name" name="name" minlength="2" maxlength="40" required />
                        <span className="edit-box__text-error edit-box__text-error_type_name" id="profile-name-error"></span>
                        <input type="text" value="Conquistador" id="profile-descriptor"
                            className="edit-box__text edit-box__text_type_descriptor" name="descriptor" minlength="2"
                            maxlength="200" required />
                        <span className="edit-box__text-error edit-box__text-error_type_descriptor"
                            id="profile-descriptor-error"></span>
                        <button type="submit" id="profile-submit" className="edit-box__submit" name="edit-box-submit"
                            aria-label="submit" value="Save">Save</button>
                    </form>
                </div>
            </section>

            <section className="popup popup_add-place">
                <div className="popup__container">
                    <button className="popup__exit popup__exit_add-place" type="button" aria-label="exit"></button>
                    <form className="edit-box edit-box_place" name="edit-box" novalidate>
                        <h3 className="edit-box__title">New place</h3>
                        <input type="text" placeholder="Title" id="place-title" value=""
                            className="edit-box__text edit-box__text_type_name" name="name" minlength="1" maxlength="30" required />
                        <span className="edit-box__text-error edit-box__text-error_type_place-title" id="place-title-error"></span>
                        <input type="url" placeholder="Image link" id="image-link" value=""
                            className="edit-box__text edit-box__text_type_descriptor" name="link" required />
                        <span className="edit-box__text-error edit-box__text-error_type_url" id="image-link-error"></span>
                        <button type="submit" id="add-place-submit" className="edit-box__submit" name="add-place-submit"
                            aria-label="submit" value="Create">Create</button>
                    </form>
                </div>
            </section>

            <section className="popup popup_image">
                <div className="popup-image-container">
                    <button className="popup__exit popup__exit_image" type="button" aria-label="exit"></button>
                    <img className="popup-image-container__pic" src="<%=require('./images/clipping_picture.png')%>" alt="landscape" />
                    <p className="popup-image-container__title"></p>
                </div>
            </section>

            <section className="popup popup_card-delete">
                <div className="popup__container">
                    <form className="edit-box edit-box_card-delete" name="edit-box">
                        <button className="popup__exit popup__exit_card-delete" type="button" aria-label="exit"></button>
                        <h3 className="edit-box__title">Are you sure?</h3>
                        <button type="submit" id="delete-place-submit" className="edit-box__submit" name="delete-place-submit"
                            aria-label="submit">Yes</button>
                    </form>
                </div>
            </section>

            <section className="popup popup_avatar">
                <div className="popup__container">
                    <form className="edit-box edit-box_avatar" name="edit-box">
                        <button className="popup__exit popup__exit_change-avatar" type="button" aria-label="exit"></button>
                        <h3 className="edit-box__title">Change profile picture</h3>
                        <input type="url" placeholder="Avatar link" id="avatar-link" value=""
                            className="edit-box__text edit-box__text_type_descriptor" name="link" required />
                        <span className="edit-box__text-error edit-box__text-error_type_url" id="avatar-link-error"></span>
                        <button type="submit" id="avatar-submit" className="edit-box__submit" name="avatar-submit"
                            aria-label="submit" value="Save">Save</button>
                    </form>
                </div>
            </section>
            {/* This script is necessary to avoid a "regenerator-runtime" error. No other solutions to
    this problem were found despite the efforts of multiple people including a senior software developer */}
            <script src="https://unpkg.com/regenerator-runtime@0.13.1/runtime.js"></script>
        </body>
    );
}

export default App;
