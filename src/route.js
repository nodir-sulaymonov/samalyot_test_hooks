import React from "react";
import {Switch, Route} from 'react-router-dom';
import App from './App';

const PublicRoute = ()=>{
    return (
        <div>
            <div style={{height: '100%'}}>
                <div>
                    <Switch>
                        <Route exact path='/' component={App} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}



export default PublicRoute;
