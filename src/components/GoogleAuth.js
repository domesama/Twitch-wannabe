import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

export class GoogleAuth extends Component {
  // state = {
  //   isSignedIn: null,
  // };
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
          this.onAuthchange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthchange);
        });
    });
  }
  onAuthchange = (isSignedIn) => {
    // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };
  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };
  renderAuthButton = () => {
    const isSignedIn = this.props.isSignedIn;

    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
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
          Sign In with Google
        </button>
      );
    }
  };
  render() {
    return <Fragment>{this.renderAuthButton()}</Fragment>;
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
