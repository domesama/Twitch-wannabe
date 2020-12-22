import React, { Component } from "react";

import { connect } from "react-redux";
import { createStreams } from "../../actions";
import StreamForm from "./StreamForm";

export class StreamCreate extends Component {
  formCallback = (formValues) => {
    this.props.createStreams(formValues);
  };
  render() {
    return (
      <div>
        <h3>Create a stream!</h3>
        <StreamForm formCallback={this.formCallback}></StreamForm>
      </div>
    );
  }
}

export default connect(null, { createStreams })(StreamCreate);
