import React, { Component } from "react";
import Joi from "joi-browser";
import EpssInput from "./EpsonInput";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: { username: "", password: "" },
      errors: {}
    };
  }

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password")
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    console.log("Joi error: ", error);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;

    //else call the server to save.
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <EpssInput
              label="Username"
              onChange={this.handleChange}
              name="username"
              inputType={"text"}
              value={account.username}
              autofocus={"autoFocus"}
              error={errors.username}
            />
            <EpssInput
              label="Password"
              onChange={this.handleChange}
              name="password"
              inputType={"password"}
              value={account.password}
              autofocus={""}
              error={errors.password}
            />
          </div>

          <button
            type="submit"
            disabled={this.validate()}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
