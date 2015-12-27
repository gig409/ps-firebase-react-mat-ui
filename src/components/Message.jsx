import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem secondaryText={this.props.message}/>
    );
  }
}

export default Message;