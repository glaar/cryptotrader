import React from "react";
import {connect} from "react-redux";
import {getBalance} from "../redux/actions/bittrex";


class Wallet extends React.Component {

    componentDidMount(){
        this.props.getBalance();
    }


    render() {
        const {bittrexResults} = this.props;
        return (
            <div>
                <h1>Wallet!</h1>
                <p>BTC: { bittrexResults && bittrexResults.Balance }</p> {/*checks if bittrexResulst have been loaded before, if not do not render this line --!>*/}
            </div>
        );
    }
}


const mapStateToProps = state => {
  return {
      bittrexResults: state.bittrex.bittrexResults
  }
};


const mapDispatchToProps = dispatch => {
  return {
      getBalance: () => dispatch(getBalance())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
