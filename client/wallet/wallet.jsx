import React from 'react';
import { connect } from 'react-redux';
import { getBalances } from '../redux/actions/bittrex';
import { askDjango } from '../redux/actions/bittrex';

import RaisedButton from 'material-ui/RaisedButton';



class Wallet extends React.Component {

    componentDidMount(){
        this.props.getBalances();
    }


    render() {
        const { balances, askDjango } = this.props;
        return (
            <div>
                <h1>Wallet</h1>
                <p>{balances}</p>
                <RaisedButton label="Django!" onClick={askDjango} />
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
      getBalances: () => dispatch(getBalances()),
      askDjango: () => dispatch(askDjango())
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
