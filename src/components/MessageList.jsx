import React from 'react';
import Message from './Message.jsx';
import Firebase from 'firebase';
import _ from 'lodash';

import Card from 'material-ui/lib/card/card';
import List from 'material-ui/lib/lists/list';


class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.firebaseref = new Firebase('https://ps-fiebase-react-mui.firebaseIO.com/messages');
    this.firebaseref.on('value', (dataSnapshot)=> {
      var messagesVal = dataSnapshot.val();
      var messages = _(messagesVal)
        .keys()
        .map((messageKey)=> {
          var cloned = _.clone(messagesVal[messageKey]);
          cloned.key = messageKey;
          return cloned;
        })
        .value();
      this.setState({
        messages: messages
      });
    });
  }

  render() {
    var messageNodes = this.state.messages.map((message, index) => {
      return (
        <Message key = {index} message = {message.message} />
      );
    });

    return (
      <Card style={{
        flexGrow: 2,
        marginLeft: 30
      }}>
        <List>
          {messageNodes}
        </List>
      </Card>
    );
  }
}

export default MessageList;