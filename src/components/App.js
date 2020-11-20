import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <div className="ui container">
            <Route path="/" exact component={StreamList} />
            <Route path="/stream/new" component={StreamCreate} />
            <Route path="/stream/edit" component={StreamEdit} />
            <Route path="/stream/delete" component={StreamDelete} />
            <Route path="/stream/show" component={StreamShow} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
