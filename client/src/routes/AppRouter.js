import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./route";
import {MAIN_PAGE_ROUTE} from "../utils/consts";
import {Context} from "../utils/context";

const AppRouter = () => {
    const [context, setContext] = useContext(Context);
    return (
        <Switch>
            {context?.logged && (privateRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component}/>
            ))}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component}/>
            )}
            <Redirect to={MAIN_PAGE_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;