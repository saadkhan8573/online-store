import React from 'react';
import { Route, Redirect } from 'react-router';

const ProtectedRoutes = ({ component: Cmp, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                render={(props) =>
                    localStorage.getItem('login') ?
                        (
                            <Cmp {...props} />
                        )
                        :
                        <Redirect
                            to="/login"
                        />
                }
            />
        </>
    )
}

export default ProtectedRoutes;