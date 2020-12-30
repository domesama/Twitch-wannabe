import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { fetchSingleStream } from "../../actions";
import flv from "flv.js";

function StreamShow({ fetchSingleStream, match, stream }) {
  const videoRef = useRef(null);
  const [isRefNull, setIsRefNull] = useState(null);

  useEffect(() => {
    fetchSingleStream(match.params.id);

    const buildPlayer = () => {
      // if (player != null) {
      //   return;
      // }
      const player = flv.createPlayer({
        type: "flv",
        url: `http://localhost:8000/live/${match.params.id}.flv`,
      });
      if (isRefNull) {
        player.attachMediaElement(videoRef.current);
        player.load();
      }
    };
    buildPlayer();
    return () => buildPlayer();
  }, [fetchSingleStream, match, isRefNull]);

  return !stream ? (
    <div> Loading</div>
  ) : (
    <div>
      <video
        ref={(el) => {
          videoRef.current = el;
          setIsRefNull(!!el);
        }}
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
