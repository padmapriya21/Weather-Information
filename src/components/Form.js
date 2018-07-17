import React from "react";

class Form extends React.Component{
  render(){
    return(
      //on submit it will display details of location, temperature ,humidity, description(form submission)
      <form onSubmit = {this.props.getWeather}>
    
        <input type="text" name="city" placeholder="City...."/>
        <input type="text" name="country" placeholder="Country...."/>
        <button>Get Weather</button>
      </form>
    );
  }
};

export default Form;
