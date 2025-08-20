import React, { Component } from "react";

export default class ClassBuy extends Component {
  constructor(props) {
    super(props);
    this.showAlert = this.showAlert.bind(this);
    this.handelAlert = this.handelAlert.bind(this);
  }
  showAlert() {
    alert(this.props.name);
  }
  handelAlert() {
    setTimeout(this.showAlert, 2000);
  }
  render() {
    return (
      <div>
        <span className="buy" onClick={this.handelAlert}>
          Buy
        </span>
        <p>Class</p>
      </div>
    );
  }
}
