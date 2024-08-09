import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../redux/selectors';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
   
    return (
        <Route
            {...rest}
            render={(props) => 
                isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};
