import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllStreams } from "../../actions";

function StreamList({ fetchAllStreams, streams }) {
  useEffect(() => {
    fetchAllStreams();
    // console.log(streams);
  }, [fetchAllStreams]);

  const fetchListsOfStreams = () => {
    const item = [];

    for (const stream in streams) {
      console.log(streams[stream]);
      item.push(
        <div className="ui segment" key={streams[stream]["id"]}>
          <div className="ui header">{streams[stream]["title"]}</div>
          <div>{streams[stream]["description"]}</div>
        </div>
      );
    }
    return item;
  };
  // streams.map((stream) => {
  //   return (
  //     <div className="ui segment" key={stream["id"]}>
  //       <div className="ui header">{stream["title"]}</div>
  //       <div>{stream["description"]}</div>
  //     </div>
  //   );
  // }
  // );

  return <div>{fetchListsOfStreams()}</div>;
}

const mapStateToProps = (state) => {
  return {
    // streams: Object.values(state.streams),
    streams: state.streams,
  };
};
export default connect(mapStateToProps, { fetchAllStreams })(StreamList);
