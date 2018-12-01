import React, { Component } from "react";
import { Consumer } from "../context";
import axios from "axios";
class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    erros: {}
  };

  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone, erros } = this.state;
    // check for validation
    if (name === "") {
      this.setState({ erros: { name: "Name field is required" } });
      return;
    }
    if (email === "") {
      this.setState({ erros: { email: "Name field is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ erros: { phone: "Name field is required" } });
      return;
    }

    // post request
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name,
        email,
        phone
      })
      .then(res => dispatch({ type: "ADD_CONTACT", payload: res.data }));
    // make inputs empty after submit
    this.setState({
      name: "",
      email: "",
      phone: "",
      erros: {}
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
              <div className="card-header">Add Contact</div>
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
                  <input type="submit" className="btn btn-dark btn-block" />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
