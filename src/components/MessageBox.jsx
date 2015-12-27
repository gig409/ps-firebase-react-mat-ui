import React from 'react';
import Card from 'material-ui/lib/card/card';
import TextField from 'material-ui/lib/text-field';
import trim from 'trim';
import Firebase from 'firebase';

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };

    this.firebaseref = new Firebase('https://ps-fiebase-react-mui.firebaseIO.com/messages');
  }

  onChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  onEnterKey(event) {
    if (trim(event.target.value) !== '') {
      event.preventDefault();
      this.firebaseref.push({
        message: this.state.message
      });
      this.setState ({
        message: ''
      });
      event.target.value = '';
      console.log('Send a new message: ', event.target.value);
    }
  }

  render() {
    return (
      <Card>
        <TextField
          value={this.props.message}
          floatingLabelText="Enter message here"
          multiLine={true}
          fullWidth={true}
          onEnterKeyDown={this.onEnterKey.bind(this)}
          onChange={this.onChange.bind(this)}/>
      </Card>
    );
  }
}

export default MessageBox;