import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Paper, Radio, FormControl, FormLabel, RadioGroup, FormControlLabel} from '@material-ui/core';



export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { value4, value5, value6, handleChange} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <FormControl component="fieldset">
          <FormLabel component="legend" style={question}>Укажите уровень своего опыта и знаний на рынке ценных бумаг?</FormLabel>
            <RadioGroup style={answer} aria-label="question4" name="question4" value={value4} onChange={handleChange}>
              <FormControlLabel value="q1_v1" control={<Radio />} label="Без опыта / начинающий (имею опыт работы менее 1 года)" />
              <FormControlLabel value="q1_v2" control={<Radio />} label="Базовые знания (опыт от 1 до 3-х лет)" />
              <FormControlLabel value="q1_v3" control={<Radio />} label="Хорошие знания (опыт работы более 3-х лет)" />
            </RadioGroup>
        </FormControl>
          <br/>
          <FormControl component="fieldset">
          <FormLabel component="legend" style={question}>Какой доход вы получаете в среднем за месяц?</FormLabel>
            <RadioGroup style={answer} aria-label="question5" name="question5" value={value5} onChange={handleChange}>
              <FormControlLabel value="q1_v1" control={<Radio />} label="Меньше 100 000 Р" />
              <FormControlLabel value="q1_v2" control={<Radio />} label="От 100 000 Р до 300 000 Р" />
              <FormControlLabel value="q1_v3" control={<Radio />} label="Больше 300 000 Р" />
            </RadioGroup>
          </FormControl>
          <br/>
          <FormControl component="fieldset">
          <FormLabel component="legend" style={question}>Какую часть сбережений вы готовы вложить?</FormLabel>
            <RadioGroup style={answer} aria-label="question6" name="question6" value={value6} onChange={handleChange}>
              <FormControlLabel value="q1_v1" control={<Radio />} label="Незначительную (до 20%)" />
              <FormControlLabel value="q1_v2" control={<Radio />} label="Значительную (от 20 до 50%)" />
              <FormControlLabel value="q1_v3" control={<Radio />} label="Большую часть (от 50%)" />
            </RadioGroup>
          </FormControl>
          <br/>
          <Button variant="contained" color="secondary"
            style={buttons}
            label="Continue"
            primary={true}
            onClick={this.continue}>
          Следующий шаг
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

export default FormPersonalDetails;

// render() {
//   const { values, handleChange } = this.props;
//   return (
//     <MuiThemeProvider>
//       <React.Fragment>
//         <TextField
//           hintText="Enter your Occupation"
//           floatingLabelText="Occupation"
//           onChange={handleChange('occupation')}
//           defaultValue={values.occupation}
//         />
//         <br/>
//         <TextField
//           hintText="Enter your City"
//           floatingLabelText="City"
//           onChange={handleChange('city')}
//           defaultValue={values.city}
//         />
//         <br/>
//         <TextField
//           hintText="Enter your Bio"
//           floatingLabelText="Bio"
//           onChange={handleChange('bio')}
//           defaultValue={values.bio}
//         />
//         <br/>
//         <RaisedButton
//           label="Continue"
//           primary={true}
//           style={styles.button}
//           onClick={this.continue}
//         />
//         <RaisedButton
//           label="Back"
//           primary={false}
//           style={styles.button}
//           onClick={this.back}
//         />
//       </React.Fragment>
//     </MuiThemeProvider>
//   );
// }
// }
//
// const styles = {
//   button: {
//     margin: 15
//   }
// }
