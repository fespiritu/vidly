import React, { Component } from "react";
// import "./Form.css";
// import FormErrors from "./FormError";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false
    };
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    // this.setState({ [name]: value }, () => {
    //   this.validateField(name, value);
    // });
    this.setState({ [name]: value });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    console.log("fieldName: ", fieldName);
    console.log("value: ", value);
    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid
          ? ""
          : `${fieldName} is invalid`;
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid
          ? ""
          : `${fieldName} is too short`;
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "text-danger";
  }

  render() {
    return (
      <div>
        {/* <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div> */}
        <form className="demoForm">
          <h2>Sign up</h2>
          <div
            className={`form-group
                 ${this.errorClass(this.state.formErrors.email)}`}
          >
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              value={this.state.email}
              className="form-control"
              name="email"
              onChange={event => this.handleUserInput(event)}
              onBlur={event =>
                this.validateField(event.target.name, event.target.value)
              }
            />
            <div className="formErrors">{this.state.formErrors.email}</div>
          </div>
          <div
            className={`form-group
                 ${this.errorClass(this.state.formErrors.password)}`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={this.state.password}
              className="form-control"
              name="password"
              onChange={event => this.handleUserInput(event)}
              onBlur={event =>
                this.validateField(event.target.name, event.target.value)
              }
            />
            <div className="formErrors">{this.state.formErrors.password}</div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!this.state.formValid}
          >
            Sign up
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
