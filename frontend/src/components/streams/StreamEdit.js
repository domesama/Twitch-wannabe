import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateStream, fetchSingleStream } from "../../actions";
import StreamForm from "./StreamForm";

function StreamEdit({ targetStream, updateStream, fetchSingleStream, match }) {
  const formCallback = (formValues) => {
    updateStream(match.params.id, formValues);
    // console.log(formValues);
  };

  useEffect(() => {
    fetchSingleStream(match.params.id);
  }, [fetchSingleStream, match]);
  console.log(targetStream);
  return !targetStream ? (
    <div> Loading . . .</div>
  ) : (
    <div>
      <h2> Edit your stream!</h2>
      <StreamForm
        formCallback={formCallback}
        //We can also do lodash's _.pick() here
        //initialValues={ _.pick(targetStream, 'title', 'description')}
        initialValues={{
          title: targetStream.title,
          description: targetStream.description,
        }}
      ></StreamForm>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return { targetStream: state.streams[`${ownProps.match.params.id}`] };
};
export default connect(mapStateToProps, { updateStream, fetchSingleStream })(
  StreamEdit
);
