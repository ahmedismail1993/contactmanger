import React, { Component } from "react";
import { Consumer } from "../context";
import axios from "axios";
class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
      const contact = res.data;
      this.setState({
        name: contact.name,
        email: contact.email,
        phone: contact.phone
      });
    });
  }

  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const { id } = this.props.match.params;

    // post request
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name,
        email,
        phone
      })
      .then(res => dispatch({ type: "ADD_CONTACT", payload: res.data }));

    //put request
    const updateContact = {
      name,
      email,
      phone
    };
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact)
      .then(res => dispatch({ type: "UPDATE_CONTACT", payload: res.data }));

    // clear state
    this.setState({
      name: "",
      email: "",
      phone: ""
    });

    this.props.history.push("/");
  };
  handleChange = e => {
    const inputValue = e.target.value;
    this.setState({ [e.target.name]: inputValue });
  };
  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input
                      className="form-control from-control-lg"
                      type="text"
                      name="name"
                      placeholder="Enter Name..."
                      value={name}
                      autoComplete="off"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">email</label>
                    <input
                      className="form-control from-control-lg"
                      type="email"
                      name="email"
                      placeholder="Enter Email..."
                      value={email}
                      autoComplete="off"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">phone</label>
                    <input
                      className="form-control from-control-lg"
                      type="text"
                      name="phone"
                      placeholder="Enter phone..."
                      autoComplete="off"
                      value={phone}
                      onChange={this.handleChange}
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-dark btn-block"
                    value="Update Contact"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
