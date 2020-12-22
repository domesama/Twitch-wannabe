import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateStream, fetchSingleStream } from "../../actions";
import StreamForm from "./StreamForm";

function StreamEdit({ targetStream, updateStream, fetchSingleStream, match }) {
  const formCallback = (formValues) => {
    updateStream(formValues);
  };

  useEffect(() => {
    fetchSingleStream(match.params.id);
  }, [fetchSingleStream, match]);
  console.log(targetStream);
  return !targetStream ? (
    <div> Loading . . .</div>
  ) : (
    <StreamForm formCallback={formCallback}></StreamForm>
  );
}
const mapStateToProps = (state, ownProps) => {
  return { targetStream: state.streams[`${ownProps.match.params.id}`] };
};
export default connect(mapStateToProps, { updateStream, fetchSingleStream })(
  StreamEdit
);
