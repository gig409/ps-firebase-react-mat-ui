import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import styles from 'material-ui/lib/styles';
import Avatar from 'material-ui/lib/avatar';
import FileFolder from 'material-ui/lib/svg-icons/file/folder';

const colors = styles.Colors;
class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem
        secondaryText={this.props.message}
        leftAvatar={
        <Avatar
          color={colors.orange200}
          backgroundColor={colors.pink400}
        >
          M
        </Avatar>
      }/>
    );
  }
}

export default Message;