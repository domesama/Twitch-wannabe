import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
export class StreamCreate extends Component {
  reunderInput = ({ input, labelName }) => {
    // return (
    //   <input
    //     type="text"
    //     className="item input"
    //     placeholder="Insert stuff here"
    //     onChange={formProps.input.onChange}
    //     value={formProps.input.value}
    //   />
    // );
    return (
      <div className="field">
        <label className="ui header"> {labelName}</label>
        <input {...input} />
      </div>
    );
  };

  onSubmit = (formValues) => {
    console.log(formValues);
  };
  render() {
    return (
      <div>
        <form
          className="ui form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="title"
            component={this.reunderInput}
            labelName="Enter Title"
          />
          <Field
            name="description"
            component={this.reunderInput}
            labelName="Enter Description"
          />

          <button type="submit" className="ui right floated teal button">
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
