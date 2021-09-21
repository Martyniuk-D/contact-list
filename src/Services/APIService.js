

export default class APIService {

    URL = "https://contact-list-c1b3c-default-rtdb.europe-west1.firebasedatabase.app/ContactList.json";

    updateContactList(list) {
        fetch(this.URL, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify(list)
        })
    }


    async loadApi() {
        const list = await fetch(this.URL).then(response => {
            return response.json();
        }).then(data => {
            if (data == null) {
                return {
                    list: []
                }
            } else {
                return {
                    list: data
                }
            }
        })
            .catch(err => console.log(err))
        return list;
    }
}
