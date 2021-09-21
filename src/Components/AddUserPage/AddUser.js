import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Component, Fragment } from "react";

import { v4 as uuidv4 } from 'uuid';

class AddUser extends Component {
    state = {
        Name: "",
        Phone: "",
        Email: "",
        Gender: "",
        Status: "",
        Image: null,
        isRedirect: false
    }

    getName = (e) => {
        const name = e.target.value;
        this.setState({
            Name: name
        })
    }

    getEmail = (e) => {
        const email = e.target.value;
        this.setState({
            Email: email
        })
    }

    getPhone = (e) => {
        const phone = e.target.value;
        this.setState({
            Phone: phone
        })
    }

    getStatus = (e) => {
        const status = e.target.value;
        this.setState({
            Status: status
        })
    }

    getGender = (e) => {
        const gender = e.target.value;
        this.setState({
            Gender: gender
        })
    }

    getAvatar = (e) => {
        const avatar = e.target.value;
        this.setState({
            Image: avatar
        })
    }
    CreateContact = (e) => {
        e.preventDefault();
        let { Name, Phone, Email, Gender, Status, Image } = this.state;
        const { OnSaveNewContact } = this.props;
        if (Name.length == 0) {
            Name = "Empty";
        }
        if (Phone.length == 0) {
            Phone = "Empty";
        }
        if (Email.length == 0) {
            Email = "Empty";
        }
        if (Status.length == 0) {
            Status = "Other";
        }
        const newContact = {
            Id: uuidv4(),
            Name,
            Phone,
            Email,
            Gender,
            Status,
            Image,
        }

        OnSaveNewContact(newContact);

        this.setState({
            isRedirect: true
        })
    }


    render() {
        let { Image, Gender, isRedirect } = this.state;
        if (isRedirect === true) {
            return <Redirect to="/" />
        }

        if (Image === null || Image == "") {
            Image = "https://freepikpsd.com/media/2019/10/contact-person-png-4-Transparent-Images.png";
        } else {
            Image = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`;;
        }

        return (
            <Fragment>
                <div className="addUserContainer">
                    <form onSubmit={this.CreateContact}>
                        <div className="addUserSubContainer" >
                            <div className="addUser-leftContainer" >
                                <NavLink to="/">
                                    <div className="addUser-Logo">Contact List</div>
                                </NavLink>
                            </div>
                            <div className="addUser-rightContainer addUser-FormContainer" >
                                <div>
                                    <h2>
                                        Enter the data of the new contact
                                    </h2>
                                </div>
                                <div className="addUser-left" >
                                    <div>
                                        <label>Full name</label>
                                    </div>
                                    <div>
                                        <label>Image</label>
                                    </div>
                                    <div>
                                        <label>Phone number</label>
                                    </div>
                                    <div>
                                        <label>Email</label>
                                    </div>
                                    <div>
                                        <label>Gender</label>
                                    </div>
                                    <div>
                                        <label>Status</label>
                                    </div>
                                </div>
                                <div className="addUser-right" >
                                    <div className="addUser-subLeft">
                                        <div>
                                            <input name="Name" type="text" onChange={this.getName} />
                                        </div>
                                        <div>
                                            <input type="number" min="0" max="99" onChange={this.getAvatar} />
                                        </div>
                                        <div>
                                            <input name="Phone" type="text" onChange={this.getPhone} />
                                        </div>
                                        <div>
                                            <input type="email" type="text" onChange={this.getEmail} />
                                        </div>
                                        <div>
                                            <select className="addUser-select" onChange={this.getGender}>
                                                <option defaultValue>Choose...</option>
                                                <option value="women">Women</option>
                                                <option value="men">Men</option>
                                            </select>
                                        </div>
                                        <div>
                                            <select className="addUser-select" onChange={this.getStatus}>
                                                <option defaultValue>Choose...</option>
                                                <option value="Work">Work</option>
                                                <option value="Family">Family</option>
                                                <option value="Private">Private</option>
                                                <option value="Friends">Friends</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="addUser-subRight">
                                        <img id="add-image" className="addUser-img" src={Image} alt="image" />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="addUser-button">Add new contact</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}


/* let image = "https://freepikpsd.com/media/2019/10/contact-person-png-4-Transparent-Images.png";

const AddUser = ({ OnSaveNewContact }) => {


    let FullName = "";
    let ImageURL = "";
    let Status = "Work";
    let Phone = "";
    let Email = "";

    const saveResult = () => {
        OnSaveNewContact(FullName, ImageURL, Status, Phone, Email);
    }

    const updateInputValueFullName = (evt) => {
        FullName = evt.target.value;
    }
    const updateInputValueImageURL = (evt) => {
        ImageURL = evt.target.value;
    }
    const updateInputValueStatus = (evt) => {
        Status = evt.target.value;
    }
    const updateInputValuePhone = (evt) => {
        Phone = evt.target.value;
    }
    const updateInputValueEmail = (evt) => {
        Email = evt.target.value;
    }

    const onBlurs = () => {
        image = ImageURL;
        console.log(image)
        let i = document.getElementById("add-image");
        i.src = image;
    }

    return (
        <div className="addUserContainer">
            <div className="addUserSubContainer" >
                <div className="addUser-leftContainer" >
                    <NavLink to="/">
                        <div className="addUser-Logo">Contact List</div>
                    </NavLink>
                </div>
                <div className="addUser-rightContainer addUser-FormContainer" >
                    <div>
                        <h2>
                            Enter the data of the new contact
                        </h2>
                    </div>
                    <div className="addUser-left" >
                        <div>
                            <label>Full name</label>
                        </div>
                        <div>
                            <label>Image (URL)</label>
                        </div>
                        <div>
                            <label>Phone number</label>
                        </div>
                        <div>
                            <label>Email</label>
                        </div>
                        <div>
                            <label>Status</label>
                        </div>
                    </div>
                    <div className="addUser-right" >
                        <div className="addUser-subLeft">
                            <div>
                                <input type="text" onChange={updateInputValueFullName} />
                            </div>
                            <div>
                                <input type="text" onBlur={onBlurs} onChange={updateInputValueImageURL} />
                            </div>
                            <div>
                                <input type="text" onChange={updateInputValuePhone} />
                            </div>
                            <div>
                                <input type="text" onChange={updateInputValueEmail} />
                            </div>
                            <div>
                                <select className="addUser-select" onChange={updateInputValueStatus}>
                                    <option value="Work">Work</option>
                                    <option value="Family">Family</option>
                                    <option value="Private">Private</option>
                                    <option value="Friends">Friends</option>
                                </select>
                            </div>
                        </div>
                        <div className="addUser-subRight">
                            <img id="add-image" className="addUser-img" src={image} onError="https://freepikpsd.com/media/2019/10/contact-person-png-4-Transparent-Images.png" alt="image" />
                        </div>
                    </div>
                    <div>
                        <NavLink to="/">
                            <input className="addUser-button" type="button" value="Add new contact" onClick={saveResult} />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
} */

export default AddUser