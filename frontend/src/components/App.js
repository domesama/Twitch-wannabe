import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";
import history from "../history";

function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <div className="ui container">
            <Switch>
              <Route path="/" exact component={StreamList} />
              <Route path="/streams/new" component={StreamCreate} />
              <Route path="/streams/edit/:id" component={StreamEdit} />
              <Route path="/streams/delete/:id" component={StreamDelete} />
              <Route path="/streams/:id" component={StreamShow} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
