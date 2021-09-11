import { Route, Redirect } from 'react-router-dom';
import { getCurrentUser } from "./apis/authenticationApis";

export const AdminRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = getCurrentUser();
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        else if (currentUser && !currentUser.isAdmin) {
            return <Redirect to={{ pathname: '/notAuthorised', state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)

export default AdminRoute;