import React from 'react';
import { connect } from 'react-redux';
import { getMarkets } from '../redux/actions/bittrex';


class Markets extends React.Component {

    componentDidMount(){
        this.props.getMarkets();
    }


    render() {
        return (
            <div>
                <h1>This is Markets</h1>
                <p>{this.props.markets}</p>
            </div>
        );
    }
}



const mapStateToProps = state => {
  return {
    markets: state.bittrex.markets
  }
};


const mapDispatchToProps = dispatch => {
  return {
      getMarkets: () => dispatch(getMarkets())
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(Markets);
