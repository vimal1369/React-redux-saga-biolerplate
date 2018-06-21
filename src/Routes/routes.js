import React from "react";
import Home from "../Home";
import {Switch, Route} from 'react-router-dom';
const Routes = () => (
    <div>
        <Switch>
            <Route  exact  path="/"  component={Home} />
            <Route  exact  path="/hello"  component={Home} />
        </Switch>
    </div>
);

export default Routes;