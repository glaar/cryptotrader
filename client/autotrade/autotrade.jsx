import React from "react";
import {connect} from "react-redux";
import ReactAutocomplete from "react-autocomplete";


class Autotrade extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value:''}
    }


    render() {
        return (
            <div>
                <h1>Select marked</h1>
                <ReactAutocomplete
                    items={[
                        { id: 'foo', label: 'foo' },
                        { id: 'bar', label: 'bar' },
                        { id: 'baz', label: 'baz' },
                    ]}
                    shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.label}
                    renderItem={(item, highlighted) =>
                        <div
                            key={item.id}
                            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                        >
                            {item.label}
                        </div>
                    }
                    value={this.state.value}
                    onChange={e => this.setState({ value: e.target.value })}
                    onSelect={value => this.setState({ value })}
                />
            </div>
        )
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


export default connect(mapStateToProps, mapDispatchToProps)(Autotrade);
