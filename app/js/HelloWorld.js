import React, { Component } from 'react';
// Material-UI
import Checkbox from 'material-ui/Checkbox';

// Theme
import { deepOrange500 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Styles
const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200
  }
}

// Theme
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
})

export default class HelloWorld extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <h1>Material-UI</h1>
          <h2>example project</h2>
          <div style={{ display: 'inline-block' }}>
            <Checkbox
              label="Simple"
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
