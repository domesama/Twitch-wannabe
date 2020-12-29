import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllStreams } from "../../actions";
import { Link } from "react-router-dom";

function StreamList({ fetchAllStreams, streams, auth }) {
  useEffect(() => {
    fetchAllStreams();
    // console.log(streams);
  }, [fetchAllStreams]);

  // const fetchListsOfStreams = () => {
  //   const item = [];

  //   for (const stream in streams) {
  //     console.log(streams[stream]);
  //     item.push(
  //       <div className="ui segment" key={streams[stream]["id"]}>
  //         <div className="ui header">{streams[stream]["title"]}</div>
  //         <div>{streams[stream]["description"]}</div>
  //       </div>
  //     );
  //   }
  //   return item;
  // };

  const fetchListsOfStreams = () => {
    return streams.map((stream) => {
      return (
        <div className="column" key={stream["id"]}>
          <div className="ui raised centered card ">
            <Link to={`streams/${stream["id"]}`}>
              <h2
                className="ui center aligned icon header"
                style={{ paddingTop: "30px" }}
              >
                <i
                  className="ui icon camera"
                  style={{ marginBottom: "0px" }}
                ></i>
              </h2>
              <div
                className="ui center aligned header"
                style={{ marginTop: "0px" }}
              >
                {stream["title"]}
              </div>
            </Link>

            <div
              className="extra"
              style={{ textAlign: "center", overflowWrap: "anywhere" }}
            >
              {stream["description"]}
              {stream["userId"] === auth["userId"] ? (
                <div className="">
                  <div className="ui  divider"> </div>
                  <Link
                    to={`streams/edit/${stream["id"]}`}
                    className="ui teal button"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`streams/delete/${stream["id"]}`}
                    className="ui red button"
                  >
                    Delete
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div
        className="ui three column doubling stackable relaxed centered grid container"
        style={{ paddingTop: "50px" }}
      >
        {fetchListsOfStreams()}

        <div className="row">
          <div className="center aligned fifteen wide column row">
            {streams.length === 0 ? (
              <Link to="/streams/new" className="center floated ui teal button">
                Create Stream
              </Link>
            ) : (
              <div>
                <div className="ui divider"></div> <br />
                <Link
                  to="/streams/new"
                  className="right floated ui teal button"
                >
                  Create Stream
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    auth: state.auth,
    // streams: state.streams,
  };
};
export default connect(mapStateToProps, { fetchAllStreams })(StreamList);
