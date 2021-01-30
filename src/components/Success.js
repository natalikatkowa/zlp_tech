import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Typography} from '@material-ui/core';



export class Success extends Component {
  continue = e => {
    e.preventDefault();
    //Process FORM - send to API //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <Typography variant="h4"> Спасибо! Скоро будет новый релиз приложения!</Typography>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}


export default Success;
