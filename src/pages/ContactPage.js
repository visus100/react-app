import React from "react";
import { Prompt } from "react-router-dom";
import "../styles/ContactPage.css";

class ContactPage extends React.Component {
  state = { value: "" };

  hnadleSubmit = e => {
    e.preventDefault();

    this.setState({ value: "" });
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.hnadleSubmit}>
          <h3>Napisz do nas</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
          <button>Wyślij</button>
        </form>
        <Prompt
          when={this.state.value === "" ? false : true}
          message="masz niewypełniony form ularz czy chesz opuścić te strone?"
        />
      </div>
    );
  }
}

export default ContactPage;
