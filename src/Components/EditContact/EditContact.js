import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Component, Fragment } from "react";

import { v4 as uuidv4 } from 'uuid';


class EditContact extends Component {
    state = {
        Id: this.props.CurrentContact.Id,
        Name: this.props.CurrentContact.Name,
        Phone: this.props.CurrentContact.Phone,
        Email: this.props.CurrentContact.Email,
        Gender: this.props.CurrentContact.Gender,
        Status: this.props.CurrentContact.Status,
        Image: this.props.CurrentContact.Image,
        isRedirect: false
    }

    componentDidMount() {
        this.checkAccess(this.state.Id);
    }
    checkAccess(id) {
        if (id == null) {
            this.setState({
                isRedirect: true
            })
        }
    }
    /* Test = (id) => {
        if (id != null) {
            this.setState({
                isRedirect: true
            })
        }
        else {
            console.log("2");
     
            return <Redirect to="/dgfgdg" />
        }
    } */

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

    UpdateContact = (e) => {
        e.preventDefault();
        const { onUpdateContact } = this.props;
        const { Id, Name, Phone, Email, Gender, Status, Image, isRedirect } = this.state;
        const newContact = {
            Id,
            Name,
            Phone,
            Email,
            Gender,
            Status,
            Image,
        }
        console.log("Here");
        onUpdateContact(newContact)
        console.log("There");
        this.setState({
            isRedirect: true
        })
    }


    render() {
        let { Name, Phone, Email, Status } = this.props.CurrentContact;
        let { isRedirect, Gender, Image } = this.state;
        if (isRedirect === true) {
            return <Redirect to="/" />
        }

        let imgNumber = Image;

        if (Image === null || Image == "") {
            Image = "https://freepikpsd.com/media/2019/10/contact-person-png-4-Transparent-Images.png";
        } else {
            Image = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`;;
        }

        return (
            <Fragment>
                <div className="addUserContainer">
                    <form onSubmit={this.UpdateContact}>
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
                                            <input name="Name" type="text" defaultValue={Name} onChange={this.getName} />
                                        </div>
                                        <div>
                                            <input type="number" min="0" max="99" defaultValue={imgNumber} onChange={this.getAvatar} />
                                        </div>
                                        <div>
                                            <input name="Phone" type="text" defaultValue={Phone} onChange={this.getPhone} />
                                        </div>
                                        <div>
                                            <input type="email" type="text" defaultValue={Email} onChange={this.getEmail} />
                                        </div>
                                        <div>
                                            <select className="addUser-select" defaultValue={Gender} onChange={this.getGender}>
                                                {/* <option defaultValue>Choose...</option> */}
                                                <option value="women">Women</option>
                                                <option value="men">Men</option>
                                            </select>
                                        </div>
                                        <div>
                                            <select className="addUser-select" defaultValue={Status} onChange={this.getStatus}>
                                                {/* <option defaultValue>Choose...</option> */}
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
                                    <button type="submit" className="addUser-button">Save</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default EditContact