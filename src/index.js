import ReactDOM from "react-dom";
import { Component } from "react";

import { v4 as uuidv4 } from 'uuid';

/* import "../node_modules/bootstrap/dist/css" */
import "./index.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
// Import Components
import Main from "./Components/Main/Main";
import NotFoundPage from "./Components/ErrorPage/NotFound"
import AddUser from "./Components/AddUserPage/AddUser";
import ContactList from "./Components/ContactList/ContactList";
import EditContact from "./Components/EditContact/EditContact";
import APIService from "./Services/APIService";

class App extends Component {

  /*   componentDidMount() {
      console.log("create");
    } */
  /*   shouldComponentUpdate(nextState, nextProps) {
      console.log("two");
      console.log(nextState);
      console.log(nextProps);
      return true;
    } */

  /*   componentDidUpdate() {
      console.log("update");
    }
  
    componentWillUnmount() {
      console.log("delete")
    } */



  state = {
    /* ContactList: [
      {
        Id: uuidv4(),
        Name: "Alexander Verdnam",
        Gender: "men",
        Image: 45,
        Phone: "+380983442211",
        Email: "Alexander_Verdnam@gmail.com",
        Status: "Work"
      },
      {
        Id: uuidv4(),
        Name: "Gerard Butler",
        Gender: "men",
        Image: 2,
        Phone: "+380972227713",
        Email: "Gerard_Butler@gmail.com",
        Status: "Friends"
      },
      {
        Id: uuidv4(),
        Name: "Anna Lee",
        Gender: "women",
        Image: 4,
        Phone: "+380987742181",
        Email: "Anna_Lee@gmail.com",
        Status: "Private"
      },
      {
        Id: uuidv4(),
        Name: "Alexandera Verdnam",
        Gender: "women",
        Image: 5,
        Phone: "+3809756729010",
        Email: "Alexandera_Verdnam@gmail.com",
        Status: "Other"
      },
      {
        Id: uuidv4(),
        Name: "Olga Verdnam",
        Gender: "women",
        Image: 6,
        Phone: "+380981234567",
        Email: "Olga_Verdnam@gmail.com",
        Status: "Family"
      },
    ], */
    ContactList: [],
    CurrentContact: ""
  }


  service = new APIService();

  URL = "https://contact-list-c1b3c-default-rtdb.europe-west1.firebasedatabase.app/ContactList.json";

  componentDidMount() {


    /* fetch(this.URL).then(response => response.json()).then(data => this.setState({ ContactList: data })); */

    this.service.loadApi().then(data => {
      this.setState({ ContactList: data.list })
    })
  }

  onStatusChange = (Id) => {
    const index = this.state.ContactList.findIndex(elem => elem.Id === Id);
    let contact = this.state.ContactList[index];

    switch (contact.Status) {
      case "Friends": contact.Status = "Other"; break;
      case "Other": contact.Status = "Work"; break;
      case "Work": contact.Status = "Family"; break;
      case "Family": contact.Status = "Private"; break;
      case "Private": contact.Status = "Friends"; break;
    }

    const tmpList = this.state.ContactList.slice();
    tmpList[index] = contact;

    this.setState({
      ContactList: tmpList
    })
    /* this.updateContactList(tmpList) */
    this.service.updateContactList(tmpList);
  }

  onDeleteUser = (Id) => {
    const index = this.state.ContactList.findIndex(elem => elem.Id === Id);
    let contact = this.state.ContactList[index];

    const tmpList = this.state.ContactList.slice();
    tmpList.splice(index, 1);

    this.setState({
      ContactList: tmpList
    })
    /* this.updateContactList(tmpList) */
    this.service.updateContactList(tmpList);
  }

  OnSaveNewContact = (newContact) => {
    const tmpList = this.state.ContactList.slice();
    tmpList.unshift(newContact);
    this.setState({
      ContactList: tmpList
    })
    /* this.updateContactList(tmpList) */
    this.service.updateContactList(tmpList);
  }

  onGetCurrentContact = (id) => {
    const index = this.state.ContactList.findIndex(el => el.Id === id);
    const currentContact = this.state.ContactList[index];
    console.log(currentContact);
    this.setState({
      CurrentContact: currentContact
    })

  }
  onUpdateContact = (newContact) => {
    const Id = newContact.Id;
    const index = this.state.ContactList.findIndex(el => el.Id === Id);
    const tmpList = this.state.ContactList.slice();
    tmpList[index] = newContact;

    this.setState({
      ContactList: tmpList
    })
    /* this.updateContactList(tmpList) */
    this.service.updateContactList(tmpList);
  }

  render() {
    const { ContactList, CurrentContact } = this.state;
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => (<Main List={ContactList} onStatusChange={this.onStatusChange}
            onDeleteUser={this.onDeleteUser} onGetCurrentContact={this.onGetCurrentContact} />)} />
          <Route path="/Add-new-contact" exact render={() => (<AddUser OnSaveNewContact={this.OnSaveNewContact} />)} />
          <Route path="/Edit-contact" exact render={() => (<EditContact onUpdateContact={this.onUpdateContact} CurrentContact={CurrentContact} />)} />
          <Route path="*" exact component={NotFoundPage} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));