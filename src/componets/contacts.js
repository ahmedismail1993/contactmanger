import React, { Component } from "react";
import Contact from "./contact";
import { Consumer } from "../context";

class Contacts extends Component {
  // هستخدم طريقة تانيه غير دي وهي actions
  // deleteContact = id => {
  //   const { contacts } = this.state; // distructring
  //   const newContacts = contacts.filter(contact => contact.id !== id); // بقولو رجعلي كله ماعدا الاي داي المتشابه
  //   this.setState({ contacts: newContacts });
  // };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <div>
              <h1 className="display-4 mb-3">
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  // deleteClickHandler={this.deleteContact.bind(this, contact.id)} // using > this.bind(this,params)  بستخدمها لو عاوز اممر بارامتر
                />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
