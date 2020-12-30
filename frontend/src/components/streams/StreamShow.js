import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { fetchSingleStream } from "../../actions";
import flv from "flv.js";

function StreamShow({ fetchSingleStream, match, stream }) {
  const [hasStream, setHasStream] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    var player = null;
    fetchSingleStream(match.params.id);

    const buildPlayer = () => {
      if (hasStream || player != null) {
        return;
      }
      setHasStream(true);
      player = flv.createPlayer({
        type: "flv",
        url: `http://localhost:8000/live/${match.params.id}.flv`,
      });
      player.attachMediaElement(videoRef.current);
      player.load();
    };
    buildPlayer();
    // return () => buildPlayer();
  }, [fetchSingleStream, match, hasStream]);

  return !stream ? (
    <div> Loading</div>
  ) : (
    <div>
      <video
        ref={videoRef}
        style={{ width: "100%", height: "40%" }}
        controls={true}
        src=""
      ></video>
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
