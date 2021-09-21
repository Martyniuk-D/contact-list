/* let count = 0; */

/*     count++;
    let number = 0 + count; */

/*     function editStatus(id) {
        let el = document.getElementById(id);
        for (let i = 0; i < statusArray.length; i++) {
            if (el.innerText == statusArray[i][0]) {
                if (i == statusArray.length - 1) {
                    i = -1;
                }
                el.innerText = statusArray[i + 1][0]
                el.className = statusArray[i + 1][1]
                break;
            }
        }
    } */

/*     const statusArray = [["Work", "lab lab-success"], ["Friends", "lab lab-warning"], ["Private", "lab lab-danger"], ["Family", "lab lab-primary"]];

    let _statusStyle;
    for (let i = 0; i < statusArray.length; i++) {
        if (Status == statusArray[i][0]) {
            _statusStyle = statusArray[i][1]
            break;
        }
    } */
import ContactList from "../ContactList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faUserSlash } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

const ContactItem = ({ Name, Email, Phone, Image, Status, Gender, onStatusChange, onDeleteUser, onGetCurrentContact }) => {

    const editIcon = <FontAwesomeIcon icon={faEdit} />
    const deleteIcon = <FontAwesomeIcon icon={faUserSlash} />

    let defaultStatus = "";
    if (Status === "Friends") {
        defaultStatus = "lab lab-warning";
    }
    else if (Status === "Work") {
        defaultStatus = "lab lab-success"
    }
    else if (Status === "Family") {
        defaultStatus = "lab lab-primary"
    }
    else if (Status === "Private") {
        defaultStatus = "lab lab-danger"
    }
    else if (Status === "Other") {
        defaultStatus = "lab other-color"
    }

    const addDefaultSrc = (ev) => {
        ev.target.src = "https://freepikpsd.com/media/2019/10/contact-person-png-4-Transparent-Images.png"
    }
    const img = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`;

    return (
        <div className="unit">
            <div className="field name">
                <div className="check">
                    <input id="cb2" name="cb1" type="checkbox" />
                    <label htmlFor="cb2"></label>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>

                </div>
                <div>
                    <img src={img} alt="image" onError={addDefaultSrc} className="avatar" /> {Name}
                </div>
                <div className={defaultStatus} onClick={onStatusChange} >{Status}</div>
            </div>
            <div className="field phone">
                {Phone}
            </div>
            <div className="field email">
                <div>{Email}</div>
                <div>
                    <span className="contactButtons" onClick={onDeleteUser}>{deleteIcon}</span>
                    <Link to="edit-contact">
                        <span className="contactButtons" onClick={onGetCurrentContact}>{editIcon}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactItem;