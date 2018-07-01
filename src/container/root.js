import React from 'react';
import { connect } from "react-redux";
import { PageHeader } from 'react-bootstrap';
import {Switch, Route, withRouter} from 'react-router-dom';
class Root extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <PageHeader>ssss
            {this.props.children}
        </PageHeader>
        )
    }
}
export default withRouter(Root);