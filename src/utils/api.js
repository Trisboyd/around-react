class Api {
    constructor({ baseUrl, auth }) {
        this._url = baseUrl;
        this._auth = auth;
    }

    // retrieve the profile info saved in the server
    getProfile() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: this._auth
            }
        })
            .then((res) => {
                return this._checkResponse(res)
            });
    }

    // gather cards from server
    getCardList() {
        return fetch(`${this._url}/cards`, {
            headers: {
                authorization: this._auth,
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                return this._checkResponse(res)
            });
    }

    // change avatar 
    changeAvatar(link) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: {
                authorization: this._authToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                avatar: link
            })
        })
            .then((res) => {
                return this._checkResponse(res)
            });
    }

    // Check if response is valid
    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        else {
            return Promise.reject(`Error: ${res.status}`)
        }
    }
}

const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-12",
    auth: "aa7e78f0-aba7-4938-a0ab-42cab952d914"
})

export default api;