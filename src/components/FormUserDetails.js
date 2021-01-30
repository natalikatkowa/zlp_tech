import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Paper, Radio, FormControl, FormLabel, RadioGroup, FormControlLabel} from '@material-ui/core';


export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { value1, value2, value3, handleChange} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <FormControl component="fieldset">
        <FormLabel component="legend" style={question}>Какая из целей инвестирования вам ближе?</FormLabel>
          <RadioGroup style={answer} aria-label="question1" name="question1" value={value1} onChange={handleChange}>
            <FormControlLabel value="q1_v1" control={<Radio />} label="Сохранить деньги от инфляции" />
            <FormControlLabel value="q1_v2" control={<Radio />} label="Обогнать инфляцию" />
            <FormControlLabel value="q1_v3" control={<Radio />} label="Заработать как можно больше" />
          </RadioGroup>
      </FormControl>
        <br/>
        <FormControl component="fieldset">
        <FormLabel component="legend" style={question}>Сколько вам лет?</FormLabel>
          <RadioGroup style={answer} aria-label="question2" name="question2" value={value2} onChange={handleChange}>
            <FormControlLabel value="q2_v1" control={<Radio />} label="Меньше 30" />
            <FormControlLabel value="q2_v2" control={<Radio />} label="от 30 до 60 лет" />
            <FormControlLabel value="q2_v3" control={<Radio />} label="больше 60 лет" />
          </RadioGroup>
        </FormControl>
        <br/>
        <FormControl component="fieldset">
        <FormLabel component="legend" style={question}>Какое у вас образование?</FormLabel>
          <RadioGroup style={answer} aria-label="question3" name="question3" value={value3} onChange={handleChange}>
            <FormControlLabel value="q3_v1" control={<Radio />} label="Cреднее или среднее специальное" />
            <FormControlLabel value="q3_v2" control={<Radio />} label="Высшее экономическое" />
            <FormControlLabel value="q3_v3" control={<Radio />} label="Иное высшее образование" />
          </RadioGroup>
        </FormControl>
        <br/>
          <Button variant="contained" color="secondary"
            label="Continue"
            primary={true}
            onClick={this.continue}>
          Следующий шаг
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


export default FormUserDetails;

//   render() {
//     const { values, handleChange} = this.props;
//     return (
//       <MuiThemeProvider>
//         <React.Fragment>
//           <TextField
//             hintText="Enter your First Name"
//             floatingLabelText="First Name"
//             onChange={handleChange('firstName')}
//             defaultValue={values.firstName}
//           />
//           <br/>
//           <TextField
//             hintText="Enter your Last Name"
//             floatingLabelText="Last Name"
//             onChange={handleChange('lastName')}
//             defaultValue={values.lastName}
//           />
//           <br/>
//           <TextField
//             hintText="Enter your Email"
//             floatingLabelText="Email"
//             onChange={handleChange('email')}
//             defaultValue={values.email}
//           />
//           <br/>
//           <Button variant="contained" color="secondary"
//             label="Continue"
//             primary={true}
//             onClick={this.continue}>
//           Следующий шаг
//           </Button>
//         </React.Fragment>
//         </MuiThemeProvider>
//     );
//   }
// }
//
// export default FormUserDetails;
