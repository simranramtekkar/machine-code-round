import React from 'react';
import './Style.css'
import Navbar from './Navbar'




class User extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          
          fields["password"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

   



  render() {
    return (

    <div id="main-registration-container">
     <div id="register">
     <Navbar/>
        
        <form method="post" action="/Login.jsx" name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>UserName</label>
        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div>
        <label>Password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        <input type="submit" className="button"  value="save Password"/>
        </form>
    </div>
    <div className="errorMsg">{this.state.errors.password}</div>
        <input type="submit" className="button"  value="Logout"/>
       
</div>

      );
  }


}


export default User;