import React, { useEffect } from "react";
import Modal from "../Modal";
import history from "../../history";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSingleStream, deleteStream } from "../../actions/index";
function StreamDelete({ match, fetchSingleStream, deleteStream, stream }) {
  useEffect(() => {
    fetchSingleStream(match.params.id);
  }, [fetchSingleStream, match]);

  const actions = (
    <div>
      <Link to="/" className="ui teal button">
        Cancel
      </Link>
      <button
        className="ui red button"
        onClick={() => deleteStream(match.params.id)}
      >
        Delete
      </button>
    </div>
  );
  return (
    <Modal
      title="Delete Stream"
      description={
        !stream
          ? "..."
          : `Are you sure you want to delete "${stream["title"]}"?`
      }
      actions={actions}
      onDismiss={() => history.push("/")}
    />
  );
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[`${ownProps.match.params.id}`] };
};

export default connect(mapStateToProps, { fetchSingleStream, deleteStream })(
  StreamDelete
);
