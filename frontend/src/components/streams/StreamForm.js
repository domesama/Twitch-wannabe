import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

export class StreamForm extends Component {
  renderInput = ({ input, labelName, meta }) => {
    // return (
    //   <input
    //     type="text"
    //     className="item input"
    //     placeholder="Insert stuff here"
    //     onChange={formProps.input.onChange}
    //     value={formProps.input.value}
    //   />
    // );
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label className="ui header"> {labelName}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError = ({ error, touched }) => {
    // console.log(error);
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.formCallback(formValues);
  };
  render() {
    return (
      <div>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="title"
            component={this.renderInput}
            labelName="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            labelName="Enter Description"
          />

          <button type="submit" className="ui left floated teal button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors["title"] = "You must enter a title";
  }
  if (!formValues.description) {
    errors["description"] = "You must enter a description";
  }
  return errors;
};

// const formWrapped = reduxForm({
//   form: "streamCreate",
//   validate: validate,
// })(StreamForm);

// export default connect(null, { this.props.formHandle })(formWrapped);

export default reduxForm({ form: "streamForm", validate: validate })(
  StreamForm
);
