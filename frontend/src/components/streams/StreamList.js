import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllStreams } from "../../actions";

function StreamList({ fetchAllStreams, streams }) {
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
          <div className="ui centered card ">
            <h2
              className="ui center aligned icon header"
              style={{ paddingTop: "25px" }}
            >
              <i className="ui icon camera"></i>
            </h2>
            <div
              className="ui center aligned header"
              style={{ marginTop: "0px" }}
            >
              {stream["title"]}
            </div>
            <div className="extra" style={{ textAlign: "center" }}>
              {stream["description"]}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="ui three column doubling stackable grid container">
      {fetchListsOfStreams()}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    // streams: state.streams,
  };
};
export default connect(mapStateToProps, { fetchAllStreams })(StreamList);
