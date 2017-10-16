import React from 'react';
import { connect } from 'react-redux';
import { getMarkets, getBalances } from '../redux/actions/bittrex';


class Markets extends React.Component {

    componentDidMount(){
        this.props.getMarkets();
        this.props.getBalances();
    }


    render() {
        return (
            <div>
                <h1>{this.props.market}</h1>
                <ul>
                    <li>{this.props.high} BTC</li>
                    <li>{this.props.low} BTC</li>
                    <li>{this.props.volume} BTC</li>
                </ul>
            </div>
        );
    }
}



const mapStateToProps = state => {
  return {
      market: state.bittrex.markets,
      high: state.bittrex.high,
      low: state.bittrex.low,
      volume: state.bittrex.volume,
      balances: state.bittrex.balances
  }
};


const mapDispatchToProps = dispatch => {
  return {
      getMarkets: () => dispatch(getMarkets()),
      getBalances: () => dispatch(getBalances())
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(Markets);
