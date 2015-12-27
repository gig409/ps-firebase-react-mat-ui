import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyTheme from '../themes/MyTheme';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import injectTapEventPlugin from 'react-tap-event-plugin';

class App extends React.Component {
  constructor() {
    super();
    injectTapEventPlugin();
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyTheme)
    };
  }

  onclicked(event) {
    console.log('event');
  }

  render() {
    return (
      <div>
        <AppBar title = ' Mad Chat App'/>
        <div style={{
          display: 'flex',
          flexflow: 'row wrap',
          maxWidth: 1200,
          width: '100%',
          margin: '30px auto 30px'
        }}>
          <ChannelList />
          <MessageList />
        </div>
        <MessageBox />
        <div style={{paddingTop: 20}}>
          <RaisedButton
            primary={true}
            label="Delete Messages"
            onTouchTap={this.onclicked}>
          </RaisedButton>
        </div>
      </div>
    );
  }
}


export default App;