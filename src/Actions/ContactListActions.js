export const getContactList = (list) => {
    return {
        type: "CONTACT_LIST_LOADED",
        payload: list
    }
}