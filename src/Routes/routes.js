import React from "react";
import Home from "../Home";
import Root from "../container/root";
import {Switch, Route, withRouter} from 'react-router-dom';

const Routes = () => (
    <div>

        <Route path="/" component={Root} />
        <Switch>
                <Route  exact  path="/"  component={Home} />

        </Switch>

    </div>
);

export default Routes;