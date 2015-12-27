import React from 'react';
import MessageList from './MessageList.jsx';
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
        <MessageList />
      </div>
    );
  }
}


export default App;