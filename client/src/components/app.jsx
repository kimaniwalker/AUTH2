import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import GoodbyeWorld from './goodbye';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';
import BlogList from './blogList';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/goodbye">Goodbye</Link>
                    <Link to="/blogList">Our Blogs</Link>
                    <AuthButton />
                    <Switch>
                        <Route exact path="/" component={HelloWorld} />
                        <Route path="/blogList" component={BlogList} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <PrivateRoute path="/goodbye" component={GoodbyeWorld} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;