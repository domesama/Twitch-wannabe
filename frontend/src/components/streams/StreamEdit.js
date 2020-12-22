import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateStream, fetchSingleStream } from "../../actions";
import { Field, reduxForm } from "redux-form";

function StreamEdit({ targetStream, updateStream, fetchSingleStream, match }) {
  useEffect(() => {
    fetchSingleStream(match.params.id);
  }, [fetchSingleStream, match]);
  console.log(targetStream);
  return !targetStream ? (
    <div> Loading . . .</div>
  ) : (
    <div>{targetStream.title}</div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return { targetStream: state.streams[`${ownProps.match.params.id}`] };
};
export default connect(mapStateToProps, { updateStream, fetchSingleStream })(
  StreamEdit
);
