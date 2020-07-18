import React from 'react';

//Had to add these
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectCity from '../actions/index';

// class City extends Component {
//   render() {
//     return (
//       <li
//         className="list-group-item"
//       >{this.props.city.name}</li>
//     );
//   }
// }

const City = (props) => {
  return (
    <li
      className="list-group-item"
      onClick={() => props.selectCity(props.city)}
    >{props.city.name}</li>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
