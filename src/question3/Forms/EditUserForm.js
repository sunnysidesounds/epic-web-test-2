import React from 'react';
import Accounts from '../Accounts/Accounts';
import { FormErrors } from "../Common/FormErrors";


export default class EditUserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.sendData.name,
      email: this.props.sendData.email,
      balance: this.props.sendData.balance,
      birthday_year: null,
      birthday_date:  null,
      birthday_month: null,
      formErrors: {name: '', email: '', balance: ''},
      emailValid: false,
      nameValid: false,
      balanceValid: false,
      formValid: false
    };

    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateBirthdayYear = this.updateBirthdayYear.bind(this);
    this.updateBirthdayDate = this.updateBirthdayDate.bind(this);
    this.updateBirthdayMonth = this.updateBirthdayMonth.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.updateBalance = this.updateBalance.bind(this);
  }

  /**
   * Just get a Date object
   * @param date
   * @returns {Date}
   */
  getDateObject(date){
    return new Date(date);
  }

  /**
   * Update name
   * TODO : Combine name, email, balance, birthday into a single method call like NewUserForm.
   * @param event
   */
  updateName(event){
    this.props.sendData.name = event.target.value;
    this.setState({name: this.validateFormField('name', event.target.value)});
  }

  /**
   * Update email
   * TODO : Combine name, email, balance, birthday into a single method call like NewUserForm.
   * @param event
   */
  updateEmail(event){
    this.props.sendData.email = event.target.value;
    this.setState({email: this.validateFormField('email', event.target.value)});
  }

  /**
   * Update balance
   * TODO : Combine name, email, balance, birthday into a single method call like NewUserForm.
   * @param event
   */
  updateBalance(event){
    this.props.sendData.balance = event.target.value;
    this.setState({balance: this.validateFormField('balance', event.target.value)});
  }

  /**
   * Update birthday year
   * @param event
   */
  updateBirthdayYear(event){
    let dobObj = new Date(this.props.sendData.birthday);
    let month = dobObj.getMonth();
    let date = dobObj.getDate();
    let year = event.target.value;
    this.props.sendData.birthday = new Date(year, month, date).toISOString();
    this.setState({birthday_year: event.target.value});
  }

  /**
   * This validates specifc form fields, email and name.
   * @param fieldName fields name in question
   * @param value value to be validated.
   * TODO : Move to common area.
   */
  validateFormField(fieldName, value) {
    let fieldErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let balanceValid = this.state.nameValid;
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'name':
        nameValid = value.length >= 2; // minimum is 2 for now.
        break;
      case 'balance':
        if(isNaN(value)){
          balanceValid = false;
        } else {
          balanceValid = true;
        }
        fieldErrors.balance = balanceValid ? '': ' is not a number';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldErrors,
      emailValid: emailValid,
      nameValid: nameValid,
      balanceValid: balanceValid
    }, this.setState({formValid: this.state.emailValid && this.state.nameValid && this.state.balanceValid}));
  }

  /**
   * Update birthday date
   * @param event
   */
  updateBirthdayDate(event){
    let dobObj = new Date(this.props.sendData.birthday);
    let month = dobObj.getMonth();
    let date = event.target.value;
    let year = dobObj.getFullYear();
    this.props.sendData.birthday = new Date(year, month, date).toISOString();
    this.setState({birthday_date: event.target.value});
  }


  /**
   * Update borthday month
   * @param event
   */
  updateBirthdayMonth(event){
    let dobObj = new Date(this.props.sendData.birthday);
    let month = (event.target.value);
    let date = dobObj.getDate();
    let year = dobObj.getFullYear();
    this.props.sendData.birthday = new Date(year, month, date).toISOString();
    this.setState({birthday_month: event.target.value});
  }

  /**
   * Update account and balance and refresh list view.
   */
  handleUpdateClick() {
    Accounts.updateAccount(this.props.sendData.id, this.props.sendData).then(data => {
      this.props.closeModal();
      this.props.refreshMe();
    });
  }


  render() {
    return (
        <div className="registration-form">
          <h1>Edit User</h1>
            <div className="form-group">
              <label>Your Name:</label>
              <input type="text"
                     className="form-control"
                     id="name"
                     name="name"
                     onChange={this.updateName}
                     value={this.props.sendData.name}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email"
                     className="form-control"
                     id="newemail"
                     name="email"
                     onChange={this.updateEmail}
                     value={this.props.sendData.email}
              />
            </div>
            <div className="form-group">
              <label>Balance:</label>
              <input type="text"
                     className="form-control"
                     id="balance"
                     placeholder="Enter balance amount"
                     name="balance"
                     onChange={this.updateBalance}
                     value={this.props.sendData.balance}
              />
            </div>
            <div className="form-group">
              <label>DOB:</label>
              <select className="dob"
                      onChange={this.updateBirthdayMonth}
                      value={this.getDateObject(this.props.sendData.birthday).getMonth()}
                      id="birthday-month">
                <option value="0">January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
                <option value="4">May</option>
                <option value="5">June</option>
                <option value="6">July</option>
                <option value="7">August</option>
                <option value="8">September</option>
                <option value="9">October</option>
                <option value="10">November</option>
                <option value="11">December</option>
              </select>
              <select
                  className="dob"
                  onChange={this.updateBirthdayDate}
                  value={this.getDateObject(this.props.sendData.birthday).getDate()}
                  id="birthday-day">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select
                  className="dob"
                  onChange={this.updateBirthdayYear}
                  value={this.getDateObject(this.props.sendData.birthday).getFullYear()}
                  id="birthday-year">
                <option value="2012">2018</option>
                <option value="2012">2017</option>
                <option value="2012">2016</option>
                <option value="2012">2015</option>
                <option value="2012">2014</option>
                <option value="2012">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
              </select>
            </div>
            <br/>
            <div className="errors-container">
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <div className="btn-group" role="group">
              <button className="btn btn-default" onClick={this.handleUpdateClick}>Update</button>
              <button className="btn btn-default" onClick={this.props.closeModal}>Cancel</button>
            </div>
        </div>
    );
  }
}