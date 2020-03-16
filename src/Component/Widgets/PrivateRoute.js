import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({children, fakeAuth, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    )
}