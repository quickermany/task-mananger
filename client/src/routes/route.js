import {ACCOUNT_ROUTE, ADMIN_ROUTE, MAIN_PAGE_ROUTE} from "../utils/consts";
import Main from "../pages/Main";
import Account from "../pages/Account";
import Administrator from "../pages/Administrator";

export const publicRoutes = [{
    path: MAIN_PAGE_ROUTE,
    Component: Main
}]

export const privateRoutes = [{
    path: ACCOUNT_ROUTE,
    Component: Account
},
    {
        path: ADMIN_ROUTE,
        Component: Administrator
    }]