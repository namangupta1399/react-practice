import React, { Component } from "react";
import "./Person.css";

class Person extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      phone: "",
    };
  }

  updateEmail = (event) => {
    console.log(event);
    this.setState({
      email: event.target.value
    });
  };

  updatePhone = (e) => {
    console.log(e);
    this.setState({
      phone: e.target.value
    });
  };

  updateHandler = (event) => {
    this.setState({
      email: this.state.email,
      phone: this.state.phone
    });
    event.preventDefault();
    alert('Email, phone updated');
  }

  render() {
    return (
      <div>
        <p>
          Id is: {this.props.id}
          <br />
          Name: {this.props.name} <br />
          Age: {this.props.age}
          <br />
          Email: {this.state.email}
          <br />
          Phone no.: {this.state.phone}
        </p>
        <div>
          <form onSubmit={this.updateHandler}>
            <input
              type="text"
              name="email"
              placeholder="Update email"
              value={this.state.email}
              onChange={this.updateEmail}
            />
            <input
              type="text"
              name="phone"
              placeholder="Update Phone"
              value={this.state.phone}
              onChange={this.updatePhone}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Person;
