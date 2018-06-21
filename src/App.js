import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
// import store
import store from "./Store/store";
import Routes from "./Routes/routes";

export default () =>
    <Provider store={store}>
        <Router>
            <Routes {...this.props} />
        </Router>
    </Provider>;
