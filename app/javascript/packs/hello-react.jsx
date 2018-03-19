// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Socket from "./socket";

export default class Hello extends React.Component {
  sendMessage = () => {
    Socket.perform("MyChannel", "do_stuff", { msg: "Here is a message" });
  };

  triggerBroadcast = () => {
    axios.post("http://localhost:3000/trigger-broadcast");
  };

  render() {
    return (
      <div>
        <h1>Hello React!</h1>

        <button onClick={this.sendMessage}>Send Message</button>

        <button onClick={this.triggerBroadcast}>Trigger Broadcast</button>
      </div>
    );
  }
}
