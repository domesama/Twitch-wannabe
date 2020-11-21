import React, { Component, Fragment } from "react";

export class GoogleAuth extends Component {
  state = {
    isSignedIn: null,
  };
  componentDidMount() {
    window.gapi.load("client: auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "325149642015-o46ed09nlclmbb4166s90a5001c0915f.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.onAuthchange();
          this.auth.isSignedIn.listen(this.onAuthchange);
        });
    });
  }
  onAuthchange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };
  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };
  renderAuthButton = () => {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOut}>
          <i className="google icon"></i>
          Logout
        </button>
      );
    } else {
      return (
        <button className="ui blue google button" onClick={this.onSignIn}>
          <i className="google icon"></i>
          Sign in with Google
        </button>
      );
    }
  };
  render() {
    return <Fragment>{this.renderAuthButton()}</Fragment>;
  }
}

export default GoogleAuth;
