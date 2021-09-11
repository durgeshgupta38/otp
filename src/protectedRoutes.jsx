import { Route, Redirect } from 'react-router-dom';

import { getCurrentUser } from "./apis/authenticationApis";

export const PrivateRoute = ({ component: Component, ...rest }) => (
   
    <Route {...rest} render={props => {
        const currentUser = getCurrentUser();
        console.log(Component);
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)

export default PrivateRoute;