import React from 'react';
import { connect } from 'react-redux';
import { getBalances } from '../redux/actions/bittrex';


class Wallet extends React.Component {

    componentDidMount(){
        this.props.getBalances();
    }


    render() {
        return (
            <div>
                <h1>Wallet</h1>
                <p>{this.props.balances}</p>
            </div>
        );
    }
}



const mapStateToProps = state => {
  return {
      balances: state.bittrex.balances
  }
};


const mapDispatchToProps = dispatch => {
  return {
      getBalances: () => dispatch(getBalances())
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
