import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
export class StreamCreate extends Component {
  reunderInput = (formProps) => {
    console.log(formProps);
    return (
      <input
        type="text"
        className="item input"
        placeholder="Insert stuff here"
        onChange={formProps.input.onChange}
        value={formProps.input.value}
      />
    );
  };
  render() {
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <Field name="title" component={this.reunderInput} />
            <Field name="description" component={this.reunderInput} />
          </div>
          <button type="submit" className="ui left floated teal button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
