import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyTheme from '../themes/MyTheme';
import AppBar from 'material-ui/lib/app-bar';

class App extends React.Component {
  constructor() {
    super();
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyTheme)
    };
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
      </div>
    );
  }
}


export default App;