import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';

class Channel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem
        secondaryText={this.props.channel}
      />
    );
  }
}

export default Channel;