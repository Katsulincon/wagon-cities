import React, { Component } from 'react';
import City from './city';

class CityList extends Component {
  renderList() {
    return this.props.cities.map((city) => {
      return <City city={city} key={city.name} />;
    });
  }

  componentWillMount() {
    //Dispatch an action to load first
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}


export default CityList;
