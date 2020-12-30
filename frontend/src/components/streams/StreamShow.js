import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSingleStream } from "../../actions";

function StreamShow({ fetchSingleStream, match, stream }) {
  useEffect(() => {
    fetchSingleStream(match.params.id);
  }, [fetchSingleStream, match]);

  return !stream ? (
    <div> Loading</div>
  ) : (
    <div>
      <h1>{stream.title}</h1>
      <h5> {stream.description}</h5>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[`${ownProps["match"]["params"]["id"]}`],
    editThis: null,
  };
};

export default connect(mapStateToProps, { fetchSingleStream })(StreamShow);
