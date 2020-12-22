import React from "react";
import { connect } from "react-redux";
import { updateStream } from "../../actions";
import { Field, reduxForm } from "redux-form";

function StreamEdit(props) {
  console.log(props.targetStream);
  return (
    <div>
      <form action=""></form>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return { targetStream: state.streams[`${ownProps.match.params.id}`] };
};
export default connect(mapStateToProps, { updateStream })(StreamEdit);
