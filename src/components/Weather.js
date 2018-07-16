import React from "react";

class Weather extends React.Component{
  render(){
    return(
      <div>
        {
          this.props.city && this.props.country && <p>Location:
            <span > {this.props.city},{this.props.country}</span>
          </p>
        }
        {
          this.props.temperature && <p>Temperature:
            <span> {this.props.temperature}</span>
          </p>
        }
        {
          this.props.humidity && <p>Humidity:
            <span> {this.props.humidity}</span>
          </p>
        }
        {
          this.props.description && <p>Description:
            <span> {this.props.description}</span>
          </p>
        }
        {
          this.props.error && <p>Error:
            <span> {this.props.error}</span>
          </p>
        }
      </div>
    );
  }
};

export default Weather;
