import React, { Fragment } from "react";

import ContactList from "../ContactList/ContactList";
import SideBar from "../SideBar/SideBar"
import { NavLink } from "react-router-dom";

const Main = ({ List, onStatusChange, onDeleteUser, onGetCurrentContact }) => {
    const contactCount = List.length;

    let _friends = 0;
    let _family = 0;
    let _private = 0;
    let _work = 0;
    let _other = 0;

    List.forEach(element => {
        if (element.Status === "Friends") {
            _friends++;
        }
        else if (element.Status === "Family") {
            _family++;
        }
        else if (element.Status === "Private") {
            _private++;
        }
        else if (element.Status === "Work") {
            _work++;
        }
        else if (element.Status === "Other") {
            _other++;
        }
    });

    return (
        <Fragment>
            <div className="container bootstrap snippets bootdeys bootdey">
                <div className="row decor-default">
                    <SideBar contactListCount={contactCount} friendsCount={_friends} familyCount={_family} privateCount={_private}
                        workCount={_work} otherCount={_other} />
                    <div className="col-lg-9 col-md-8 col-sm-12">
                        <div className="contacts-list">
                            <div>
                                <h1 className="title">Contact List</h1>
                                <NavLink className="addUser-button-main" to="/Add-new-contact">Add new contact</NavLink>
                            </div>
                            <form className="ac-custom ac-checkbox ac-checkmark" autoComplete="off" scrolling="yes">
                                <div className="input-group">
                                    <input type="text" className="contacts-list-search" placeholder="Search" />
                                </div>
                                <div className="unit head">
                                    <div className="field name">
                                        <div className="check">
                                            <input id="cb1" name="cb1" type="checkbox" />
                                            <label htmlFor="cb1"></label>
                                            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg></div>
                                        Name
                                    </div>
                                    <div className="field phone">
                                        Phone
                                    </div>
                                    <div className="field email icons">
                                        Email
                                        {/* <div className="btn-group pull-right" role="group">
                                            <button type="button" className="btn btn-default"><span className="icon icon-folder"></span></button>

                                            <div className="btn-group" role="group">
                                                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-label"></span></button>

                                                <ul className="dropdown-menu pull-right">
                                                    <li><a href="#"><span className="label label-success text-dark">New</span></a></li>
                                                    <li><a href="#"><span className="label label-primary text-dark">Social</span></a></li>
                                                    <li><a href="#"><span className="label label-warning text-dark">Spam</span></a></li>
                                                </ul>
                                            </div>
                                            <button type="button" className="btn btn-default"><span className="icon icon-trash"></span></button>
                                        </div> */}
                                    </div>
                                </div>
                                <ContactList List={List} onGetCurrentContact={onGetCurrentContact} onStatusChange={onStatusChange} onDeleteUser={onDeleteUser} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Main;