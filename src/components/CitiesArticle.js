import React, { Component } from 'react';
import CityHeader from './CityHeader'
import CityMain from './CityMain'

class CitiesArticle extends Component {
  render() {
    return (
        <article>
          <CityHeader 
          cities={this.props.cities} 
          setCurrSelectedCity={this.props.setCurrSelectedCity}
          currSelectedCityName={this.props.currSelectedCityName} 
          currSelectedCityImage={this.props.currSelectedCityImage} />
          <CityMain />
        </article>
    );
  } 
}

export default CitiesArticle;
