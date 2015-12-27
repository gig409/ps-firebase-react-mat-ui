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
      messages: {}
    };
    this.firebaseref = new Firebase('https://ps-fiebase-react-mui.firebaseIO.com/messages');
    this.firebaseref.on('child_added', (msg)=> {
      if (this.state.messages[msg.key()]) {
        return;
      }
      let msgVal = msg.val();
      msgVal.key = msg.key();
      this.state.messages[msgVal.key] = msgVal;
      this.setState({messages: this.state.messages});
    });
    this.firebaseref.on('child_removed', (msg)=> {
      var key = msg.key();
      delete this.state.messages[key];
      this.setState({messages: this.state.messages});
    });
  }

  render() {
    var messageNodes = _.values(this.state.messages).map((message) => {
      return (
        <Message key = {message.key} message = {message.message} />
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