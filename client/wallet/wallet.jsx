import React from "react";
import {connect} from "react-redux";
import {askDjango} from "../redux/actions/bittrex";


class Wallet extends React.Component {

    componentDidMount(){
        this.props.askDjango();
    }


    render() {
        const {bittrexResults} = this.props;
        return (
            <div>
                <h1>Wallet</h1>
                {console.log(bittrexResults)}
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
      askDjango: () => dispatch(askDjango())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
