import React from 'react';
import Message from './Message.jsx';

import Card from 'material-ui/lib/card/card';
import List from 'material-ui/lib/lists/list';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        'Hi there how are you?',
        'I am fine, and you?'
      ]
    };
  }

  render() {
    var messageNodes = this.state.messages.map((message, index) => {
      return (
        <Message key = {index} message = {message} />
      );
    });

    return (
      <Card>
        <List>
          {messageNodes}
        </List>
      </Card>
    );
  }
}

export default MessageList;