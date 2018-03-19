import * as actioncable from "actioncable";

export default class Sockets {
  static connect() {
    this.cable = createConsumer();
    this.subscribe("MyChannel", {
      received: msg => {
        let jsonMsg = msg;
        if (typeof msg === "string") {
          jsonMsg = JSON.parse(msg);
        }
        console.info(jsonMsg);
      }
    });
  }

  static subscribe(channel, handler) {
    this.cable.subscriptions.create(channel, handler);
  }

  static findSubscriber(channel) {
    return this.cable.subscriptions.findAll(this.getIdentifier(channel));
  }

  static perform(channel, action, data) {
    return this.findSubscriber(channel).forEach(subscription =>
      subscription.perform(action, data)
    );
  }

  static destroy() {
    this.cable.subscriptions.subscriptions.forEach(subscription =>
      subscription.unsubscribe()
    );
  }

  static getIdentifier(channel) {
    return JSON.stringify({ channel });
  }
}

function createConsumer() {
  return actioncable.createConsumer("ws://localhost:28080/cable");
}
