import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Paper, Radio, FormControl, FormLabel, RadioGroup, FormControlLabel} from '@material-ui/core';



export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { value7, value8, handleChange} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <FormControl component="fieldset">
          <FormLabel component="legend" style={question}>Какая наиболее приоритетная цель ваших вложений?</FormLabel>
            <RadioGroup style={answer} aria-label="question7" name="question7" value={value7} onChange={handleChange}>
              <FormControlLabel value="q1_v1" control={<Radio />} label="Сохранить средства" />
              <FormControlLabel value="q1_v2" control={<Radio />} label="Получить доходность, сопоставимую с депозитом" />
              <FormControlLabel value="q1_v3" control={<Radio />} label="Получить доходность выше, чем по депозиту" />
            </RadioGroup>
        </FormControl>
          <br/>
          <FormControl component="fieldset">
          <FormLabel component="legend" style={question}>На какой срок планируете инвестировать средства?</FormLabel>
            <RadioGroup style={answer} aria-label="question8" name="question8" value={value8} onChange={handleChange}>
              <FormControlLabel value="q1_v1" control={<Radio />} label="1-3 года/среднесрочное инвестирование" />
              <FormControlLabel value="q1_v2" control={<Radio />} label="3-5 лет и более/долгосрочное инвестирование" />
            </RadioGroup>
          </FormControl>
          <br/>
          <FormControl component="fieldset">
          <FormLabel component="legend" style={question}>Укажите сумму, которую вы готовы инвестировать:</FormLabel>
          <TextField />
          </FormControl>
          <br/>
          <Button variant="contained" color="secondary"
            style={buttons}
            label="Continue"
            primary={true}
            onClick={this.continue}>
          Отправить данные анкеты
          </Button>
          <Button variant="contained" color="secondary"
            style={buttons}
            label="Continue"
            primary={true}
            onClick={this.back}>
          Назад
          </Button>
        </React.Fragment>
        </MuiThemeProvider>
    );
  }
}

const question = {
  fontSize: "25px",
  color:"black",
  fontWeight:"bold",
  marginBottom: 15,
  padding: 5
}

const answer = {
  marginBottom: 15,
  padding: 5
}

const buttons = {
  margin: 10
}

export default Confirm;

// import React, { Component } from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {List, ListItem} from 'material-ui/List';
// import RaisedButton from 'material-ui/RaisedButton';
//
//
// export class FormUserDetails extends Component {
//   continue = e => {
//     e.preventDefault();
//     //Process FORM - send to API //
//     this.props.nextStep();
//   };
//
//   back = e => {
//     e.preventDefault();
//     this.props.prevStep();
//   };
//
//   render() {
//     const { values: {firstName, lastName, email, occupation, city, bio} } = this.props;
//     return (
//       <MuiThemeProvider>
//         <React.Fragment>
//           <List>
//             <ListItem
//               primaryText="First Name"
//               secondaryText={firstName}
//             />
//             <ListItem
//               primaryText="Last Name"
//               secondaryText={lastName}
//             />
//             <ListItem
//               primaryText="Email Name"
//               secondaryText={email}
//             />
//             <ListItem
//               primaryText="Occupation"
//               secondaryText={occupation}
//             />
//             <ListItem
//               primaryText="City"
//               secondaryText={city}
//             />
//             <ListItem
//               primaryText="Bio"
//               secondaryText={bio}
//             />
//           </List>
//           <br/>
//           <RaisedButton
//             label="Confirm & Continue"
//             primary={true}
//             style={styles.button}
//             onClick={this.continue}
//           />
//           <RaisedButton
//             label="Back"
//             primary={false}
//             style={styles.button}
//             onClick={this.back}
//           />
//         </React.Fragment>
//       </MuiThemeProvider>
//     );
//   }
// }
//
//   const styles = {
//     button: {
//       margin: 15
//     }
//   }
//
//
// export default FormUserDetails;
