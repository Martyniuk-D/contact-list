import ContactItem from "../ContactList/ContactItem/ContactItem";

//Array items
const ContactList = ({ List, onStatusChange, onDeleteUser, onGetCurrentContact }) => {

    const item = List.map((listItem) => {
        return (<ContactItem key={listItem.Id} /* Name={listItem.Name} Image={listItem.Image} Status={listItem.Status}
            Phone={listItem.Phone} Email={listItem.Email} */ {...listItem}
            onStatusChange={() => onStatusChange(listItem.Id)} onDeleteUser={() => onDeleteUser(listItem.Id)}
            onGetCurrentContact={() => onGetCurrentContact(listItem.Id)} />)
    });

    return (
        <div>
            {item.length > 0 ? item : <h1 className="textCenter">List's Empty</h1>}
        </div>
    );
}

export default ContactList;