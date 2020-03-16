import React from 'react';
import { Route , Switch, useHistory, useLocation } from 'react-router-dom';
import {About} from './About';
import {Param} from './param';
import { Home } from '../Home';
import { PrivateRoute } from '../Widgets'
import { NotFound } from '../NotFound'

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
};

function PublicPage() {
    return <h3>Public</h3>;
}
  
function ProtectedPage() {
    return <h3>Protected</h3>;
}
  
function LoginPage() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(() => {
        history.replace(from);
        });
    };

    return (
        <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={login}>Log in</button>
        </div>
    );
}

export const Rout=()=>{
    return(
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/public">
                    <PublicPage />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <PrivateRoute fakeAuth={fakeAuth} path="/protected">
                    <ProtectedPage />
                </PrivateRoute>
                <Route path="/:param" component={Param} />
                <Route path='*' component={NotFound} />
            </Switch>
        </div>
    )
}