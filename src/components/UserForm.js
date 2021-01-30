// parent component
import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
 state = {
   step: 1,
   value1: '',
   value2: '',
   value3: '',
   value4: '',
   value5: '',
   value6: '',
   value7: '',
   value8: '',
  }


  //следующий шаг
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  //предыдущий шаг
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //изменение полей
  handleChange = () => e => {
    this.setState( e.target.value);
  };


  render() {
    const { step } = this.state;
    const { value1, value2, value3, value4, value5, value6, value7, value8 } = this.state;
    const values  = { value1, value2, value3, value4, value5, value6, value7, value8 };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            onChange={this.handleChange}
            value={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onChange={this.handleChange}
            value={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onChange={this.handleChange}
            value={values}
          />
        );
      case 4:
          return <Success/>;

    }

    return (
      <div>

      </div>
    )
  }
}

export default UserForm
