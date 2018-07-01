import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {requestApiData} from "../../Actions/actions";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <span>
            header
            </span>
        )
    }
}

const mapStateToProps = state => ({data: state.data});

const mapDispatchToProps = dispatch =>
    bindActionCreators({requestApiData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);