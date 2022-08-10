import React, { Component } from "react";
import { Route, Navigate } from "react-router-dom";

const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }

    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
        return false;
    }
}


const PrivateRoute = ({ component: Component, ...rest }) => (
    // props means components passed down to this pricate route component
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Navigate
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

export default PrivateRoute;