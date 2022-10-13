import React from 'react';
import { Route, Switch } from 'react-router-dom';
import homeStart from './components/homeStart.jsx';
import Home from './components/home.jsx';
import Us from './components/us.jsx';
import Option_1 from './components/option_1.jsx';
import Option_2 from './components/option_2.jsx';
import Option_3 from './components/option_3.jsx';
import Nav_Bar from './components/nav_Bar.jsx';


const Routes = () => {

    return (
        <React.Fragment>
            <Nav_Bar />
            <Switch>
                <Route exact path="/" component={homeStart} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Us" component={Us} />
                <Route path="/Option_1" component={Option_1} />
                <Route path="/Option_2" component={Option_2} />
                <Route path="/Option_3" component={Option_3} />
            </Switch>
        </React.Fragment>
    )
}

export default Routes;