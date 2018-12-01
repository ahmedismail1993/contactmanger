import React, { Component } from "react";

const Context = React.createContext();

const Reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    contacts: [
      { id: 1, name: "ahmed", phone: "01060022385", email: "ahmed@yahoo.com" },
      {
        id: 2,
        name: "ismail",
        phone: "01020464941",
        email: "ismail@yahoo.com"
      },
      { id: 3, name: "ali", phone: "01090494246", email: "ali@yahoo.com" }
    ],
    dispatch: action => this.setState(state => Reducer(state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const consumer = Context.Consumer;
